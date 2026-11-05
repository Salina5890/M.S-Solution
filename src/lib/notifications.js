/**
 * M.S SOLUTIONS - Notification & Auto-Reply Service
 * Handles instant alerts to the business owner and automated service confirmations to clients.
 */
import { BRAND } from '../utils/navigation';
import { SERVICES } from '../data/servicesData';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL || BRAND.email;

/**
 * Sends an email notification using EmailJS REST API
 * (Works without extra dependencies)
 */
async function sendViaEmailJS(templateParams) {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    return {
      success: false,
      skipped: true,
      reason: 'EmailJS credentials not configured yet.',
    };
  }

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: templateParams,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`EmailJS error: ${errorText || response.statusText}`);
  }

  return { success: true };
}

/**
 * Instant notification for incoming project inquiry
 * Notifies the owner and prepares service details for the client.
 */
export async function handleInquiryNotification(inquiry) {
  const serviceDetail = SERVICES.find(
    (s) => s.title.toLowerCase() === (inquiry.serviceInterest || '').toLowerCase()
  ) || SERVICES[0];

  const servicesListSummary = SERVICES.map(
    (s, idx) => `${idx + 1}. ${s.title}: ${s.shortDesc || s.summary || ''}`
  ).join('\n');

  const templateParams = {
    // Owner Notification
    to_email: ADMIN_EMAIL,
    admin_name: BRAND.name,
    client_name: inquiry.name,
    client_email: inquiry.email,
    client_organization: inquiry.organization || 'Not specified',
    service_interest: inquiry.serviceInterest,
    project_type: inquiry.projectType || 'General Inquiry',
    client_message: inquiry.message,
    submitted_at: new Date().toLocaleString(),

    // Service auto-reply info for the client
    brand_name: BRAND.name,
    brand_email: BRAND.email,
    brand_phone: BRAND.phone,
    selected_service: serviceDetail.title,
    services_summary: servicesListSummary,
  };

  try {
    const emailResult = await sendViaEmailJS(templateParams);
    return {
      success: true,
      emailResult,
      serviceInfo: serviceDetail,
    };
  } catch (error) {
    console.warn('Notification delivery note:', error.message);
    return {
      success: false,
      error: error.message,
      serviceInfo: serviceDetail,
    };
  }
}

