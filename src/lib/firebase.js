/**
 * M.S SOLUTIONS - Firebase Configuration & Services
 * Handles Cloud Firestore (inquiries & visitor analytics) and Google Analytics.
 */
import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
  orderBy,
  limit,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  increment,
} from 'firebase/firestore';
import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

/**
 * Checks if the required Firebase environment variables are provided.
 */
export const isFirebaseConfigured = () => {
  return Boolean(
    firebaseConfig.apiKey &&
    firebaseConfig.projectId &&
    firebaseConfig.appId
  );
};

// Initialize Firebase safely
const app = isFirebaseConfigured()
  ? (getApps().length ? getApp() : initializeApp(firebaseConfig))
  : null;

export const db = app ? getFirestore(app) : null;

// Initialize Google Analytics safely in browser
export let analytics = null;
if (typeof window !== 'undefined' && app && firebaseConfig.measurementId) {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {});
}

/**
 * Track a page visit for audience analytics.
 * Works with both Firebase Analytics (GA4) and custom Firestore visitor logs.
 */
export async function trackPageView(pagePath = window.location.pathname) {
  if (analytics) {
    try {
      logEvent(analytics, 'page_view', { page_path: pagePath });
    } catch (_) {}
  }

  if (!isFirebaseConfigured() || !db) return;

  try {
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const summaryRef = doc(db, 'siteStats', 'summary');
    const dailyRef = doc(db, 'siteStats', today);

    // 1. Increment total visits summary
    await setDoc(
      summaryRef,
      {
        totalVisits: increment(1),
        lastVisitAt: serverTimestamp(),
      },
      { merge: true }
    );

    // 2. Increment daily visits
    await setDoc(
      dailyRef,
      {
        date: today,
        visits: increment(1),
      },
      { merge: true }
    );

    // 3. Log lightweight visit entry
    const visitsCol = collection(db, 'siteVisits');
    await addDoc(visitsCol, {
      path: pagePath,
      visitedAt: serverTimestamp(),
      referrer: document.referrer || 'direct',
      device: window.innerWidth < 768 ? 'mobile' : 'desktop',
    });
  } catch (err) {
    console.debug('Analytics log skipped:', err.message);
  }
}

/**
 * Validates and submits a business inquiry to Cloud Firestore
 * Collection: `projectInquiries`
 */
export async function submitProjectInquiry(inquiryData) {
  if (!isFirebaseConfigured() || !db) {
    throw new Error(
      'Firebase is not yet configured. Please set the VITE_FIREBASE_* environment variables in your .env file.'
    );
  }

  // Validate required inputs
  const fullName = (inquiryData.name || '').trim();
  const email = (inquiryData.email || '').trim().toLowerCase();
  const message = (inquiryData.message || '').trim();
  const serviceInterest = (inquiryData.serviceInterest || 'Web Application Development').trim();
  const organization = (inquiryData.organization || '').trim();
  const projectType = (inquiryData.projectType || 'new-project').trim();
  const budgetRange = (inquiryData.budgetRange || '').trim();

  if (!fullName || fullName.length < 2) {
    throw new Error('Please enter your full name (at least 2 characters).');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    throw new Error('Please enter a valid email address.');
  }

  if (!message || message.length < 10) {
    throw new Error('Please provide at least 10 characters describing your project requirements.');
  }

  // Construct normalized payload for Firestore
  const payload = {
    fullName,
    email,
    organization: organization || 'Not specified',
    serviceInterest,
    projectType,
    budgetRange: budgetRange || 'Flexible / To be discussed',
    message,
    status: 'new', // new | contacted | closed
    createdAt: serverTimestamp(),
    submittedAt: new Date().toISOString(),
    source: 'web_contact_form',
  };

  const inquiriesRef = collection(db, 'projectInquiries');
  const docRef = await addDoc(inquiriesRef, payload);

  return {
    success: true,
    id: docRef.id,
    data: payload,
  };
}

/**
 * Fetch all received inquiries (for Admin Dashboard)
 */
export async function getInquiries(maxCount = 50) {
  if (!isFirebaseConfigured() || !db) return [];
  try {
    const q = query(
      collection(db, 'projectInquiries'),
      orderBy('createdAt', 'desc'),
      limit(maxCount)
    );
    const snap = await getDocs(q);
    return snap.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));
  } catch (err) {
    console.error('Error fetching inquiries:', err);
    return [];
  }
}

/**
 * Fetch audience / visitor analytics summary (for Admin Dashboard)
 */
export async function getAnalyticsSummary() {
  if (!isFirebaseConfigured() || !db) {
    return {
      configured: false,
      totalVisits: 0,
      todayVisits: 0,
      recentVisits: [],
    };
  }

  try {
    const today = new Date().toISOString().slice(0, 10);
    const summarySnap = await getDoc(doc(db, 'siteStats', 'summary'));
    const todaySnap = await getDoc(doc(db, 'siteStats', today));

    const visitsQuery = query(
      collection(db, 'siteVisits'),
      orderBy('visitedAt', 'desc'),
      limit(20)
    );
    const visitsSnap = await getDocs(visitsQuery);

    return {
      configured: true,
      totalVisits: summarySnap.exists() ? summarySnap.data().totalVisits || 0 : 0,
      todayVisits: todaySnap.exists() ? todaySnap.data().visits || 0 : 0,
      recentVisits: visitsSnap.docs.map((d) => ({ id: d.id, ...d.data() })),
    };
  } catch (err) {
    console.warn('Analytics summary error:', err.message);
    return {
      configured: true,
      totalVisits: 0,
      todayVisits: 0,
      recentVisits: [],
      error: err.message,
    };
  }
}

/**
 * Update the status of an inquiry (e.g. 'new' -> 'contacted')
 */
export async function updateInquiryStatus(inquiryId, status) {
  if (!isFirebaseConfigured() || !db) return false;
  try {
    const docRef = doc(db, 'projectInquiries', inquiryId);
    await updateDoc(docRef, { status });
    return true;
  } catch (err) {
    console.error('Error updating status:', err);
    return false;
  }
}

export default app;
