import React, { useState, useEffect } from 'react';
import {
  Users,
  Eye,
  Mail,
  CheckCircle,
  Clock,
  RefreshCw,
  Lock,
  ShieldAlert,
  ArrowUpRight,
  Calendar,
  Monitor,
  Smartphone,
  ExternalLink,
} from 'lucide-react';
import { getInquiries, getAnalyticsSummary, updateInquiryStatus, isFirebaseConfigured } from '../../lib/firebase';
import { BRAND } from '../../utils/navigation';
import usePageMeta from '../../utils/usePageMeta';
import './AdminPage.css';

const DEFAULT_PASSCODE = import.meta.env.VITE_ADMIN_PASSCODE || 'admin123';

export function AdminPage() {
  usePageMeta('Admin & Audience Dashboard', 'M.S Solutions internal management and visitor analytics.');

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('ms_admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');

  const [loading, setLoading] = useState(false);
  const [inquiries, setInquiries] = useState([]);
  const [analytics, setAnalytics] = useState({
    configured: false,
    totalVisits: 0,
    todayVisits: 0,
    recentVisits: [],
  });
  const [activeTab, setActiveTab] = useState('audience'); // 'audience' | 'inquiries'

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode.trim() === DEFAULT_PASSCODE) {
      setIsAuthenticated(true);
      sessionStorage.setItem('ms_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Incorrect passcode. Please check your credentials.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('ms_admin_auth');
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const [inquiriesData, analyticsData] = await Promise.all([
        getInquiries(),
        getAnalyticsSummary(),
      ]);
      setInquiries(inquiriesData || []);
      setAnalytics(analyticsData || {});
    } catch (err) {
      console.error('Failed to load dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const handleStatusChange = async (inquiryId, newStatus) => {
    const ok = await updateInquiryStatus(inquiryId, newStatus);
    if (ok) {
      setInquiries((prev) =>
        prev.map((item) => (item.id === inquiryId ? { ...item, status: newStatus } : item))
      );
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-lock">
        <div className="admin-lock__card">
          <div className="admin-lock__icon">
            <Lock size={32} />
          </div>
          <h1>M.S Solutions Portal</h1>
          <p>Enter your administration passcode to access live audience analytics and customer inquiries.</p>

          <form onSubmit={handleLogin} className="admin-lock__form">
            <input
              type="password"
              placeholder="Enter passcode (Default: admin123)"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              autoFocus
            />
            {authError && <p className="admin-lock__err">{authError}</p>}
            <button type="submit" className="btn btn--primary btn--md">
              Unlock Dashboard
            </button>
          </form>

          <div className="admin-lock__hint">
            <span>Passcode can be customized in your <code>.env</code> file (VITE_ADMIN_PASSCODE)</span>
          </div>
        </div>
      </div>
    );
  }

  const isConfigured = isFirebaseConfigured();
  const unreadCount = inquiries.filter((i) => i.status === 'new').length;

  return (
    <div className="admin-dash">
      <header className="admin-dash__header">
        <div className="admin-dash__header-inner">
          <div>
            <span className="admin-dash__badge">M.S Solutions Administration</span>
            <h1>Audience & Business Intelligence</h1>
          </div>
          <div className="admin-dash__actions">
            <button
              type="button"
              className="btn btn--secondary btn--sm"
              onClick={loadData}
              disabled={loading}
              title="Refresh Data"
            >
              <RefreshCw size={16} className={loading ? 'spin' : ''} />
              <span>Refresh</span>
            </button>
            <button
              type="button"
              className="btn btn--secondary btn--sm"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>

        {!isConfigured && (
          <div className="admin-banner-warn">
            <ShieldAlert size={20} />
            <div>
              <strong>Firebase Not Yet Connected!</strong>
              <p>
                Add your Firebase API keys in <code>.env</code> to start recording live visitors and inquiries in the Cloud database.
              </p>
            </div>
          </div>
        )}
      </header>

      {/* KPI Cards */}
      <section className="admin-stats">
        <div className="admin-stat-card">
          <div className="admin-stat-card__icon admin-stat-card__icon--blue">
            <Eye size={22} />
          </div>
          <div className="admin-stat-card__content">
            <span className="admin-stat-card__label">Total Audience / Visits</span>
            <span className="admin-stat-card__value">{analytics.totalVisits || 0}</span>
            <span className="admin-stat-card__sub">All-time tracked pageviews</span>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-card__icon admin-stat-card__icon--green">
            <Calendar size={22} />
          </div>
          <div className="admin-stat-card__content">
            <span className="admin-stat-card__label">Today's Visitors</span>
            <span className="admin-stat-card__value">{analytics.todayVisits || 0}</span>
            <span className="admin-stat-card__sub">Active traffic today</span>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-card__icon admin-stat-card__icon--navy">
            <Mail size={22} />
          </div>
          <div className="admin-stat-card__content">
            <span className="admin-stat-card__label">Total Inquiries</span>
            <span className="admin-stat-card__value">{inquiries.length}</span>
            <span className="admin-stat-card__sub">{unreadCount} pending review</span>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-card__icon admin-stat-card__icon--amber">
            <Users size={22} />
          </div>
          <div className="admin-stat-card__content">
            <span className="admin-stat-card__label">Lead Conversion</span>
            <span className="admin-stat-card__value">
              {analytics.totalVisits > 0
                ? `${((inquiries.length / analytics.totalVisits) * 100).toFixed(1)}%`
                : '0%'}
            </span>
            <span className="admin-stat-card__sub">Inquiries per 100 visits</span>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="admin-tabs">
        <button
          type="button"
          className={`admin-tab ${activeTab === 'audience' ? 'admin-tab--active' : ''}`}
          onClick={() => setActiveTab('audience')}
        >
          <Eye size={18} />
          <span>Audience & Traffic ({analytics.totalVisits || 0})</span>
        </button>
        <button
          type="button"
          className={`admin-tab ${activeTab === 'inquiries' ? 'admin-tab--active' : ''}`}
          onClick={() => setActiveTab('inquiries')}
        >
          <Mail size={18} />
          <span>Customer Inquiries ({inquiries.length})</span>
          {unreadCount > 0 && <span className="admin-badge-count">{unreadCount}</span>}
        </button>
      </div>

      {/* Tab 1: Audience Analytics */}
      {activeTab === 'audience' && (
        <section className="admin-panel">
          <div className="admin-panel__head">
            <h2>Recent Visitors Log</h2>
            <p>Live streams of audience visiting your pages</p>
          </div>

          {analytics.recentVisits && analytics.recentVisits.length > 0 ? (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Page Visited</th>
                    <th>Device</th>
                    <th>Referrer</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {analytics.recentVisits.map((v) => (
                    <tr key={v.id}>
                      <td>
                        <span className="admin-page-tag">{v.path || '/'}</span>
                      </td>
                      <td>
                        <span className="admin-device-tag">
                          {v.device === 'mobile' ? <Smartphone size={14} /> : <Monitor size={14} />}
                          <span>{v.device || 'desktop'}</span>
                        </span>
                      </td>
                      <td>
                        <span className="admin-cell-muted">{v.referrer || 'Direct visit'}</span>
                      </td>
                      <td>
                        <span className="admin-cell-muted">
                          {v.visitedAt?.toDate
                            ? v.visitedAt.toDate().toLocaleString()
                            : 'Just now'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="admin-empty">
              <Eye size={36} />
              <h3>No traffic tracked yet</h3>
              <p>
                {isConfigured
                  ? 'Visits will appear here automatically as visitors navigate through your pages.'
                  : 'Configure Firebase in .env to enable audience tracking.'}
              </p>
            </div>
          )}
        </section>
      )}

      {/* Tab 2: Inquiries & Leads */}
      {activeTab === 'inquiries' && (
        <section className="admin-panel">
          <div className="admin-panel__head">
            <h2>Customer Contact Messages</h2>
            <p>Clients who have requested project services and quotes</p>
          </div>

          {inquiries.length > 0 ? (
            <div className="admin-inquiries-list">
              {inquiries.map((inq) => (
                <article key={inq.id} className={`admin-inq-card admin-inq-card--${inq.status || 'new'}`}>
                  <div className="admin-inq-card__header">
                    <div>
                      <h3>{inq.fullName}</h3>
                      <div className="admin-inq-card__meta">
                        <a href={`mailto:${inq.email}`} className="admin-link">
                          {inq.email}
                        </a>
                        {inq.organization && inq.organization !== 'Not specified' && (
                          <span className="admin-inq-card__org">• {inq.organization}</span>
                        )}
                      </div>
                    </div>
                    <div className="admin-inq-card__status-box">
                      <select
                        value={inq.status || 'new'}
                        onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                        className={`admin-status-select admin-status-select--${inq.status || 'new'}`}
                      >
                        <option value="new">🟡 New</option>
                        <option value="contacted">🔵 Contacted</option>
                        <option value="closed">🟢 Closed</option>
                      </select>
                    </div>
                  </div>

                  <div className="admin-inq-card__topic">
                    <strong>Service Interest:</strong> {inq.serviceInterest || 'General'}
                  </div>

                  <p className="admin-inq-card__msg">{inq.message}</p>

                  <div className="admin-inq-card__footer">
                    <span className="admin-cell-muted">
                      <Clock size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
                      {inq.submittedAt ? new Date(inq.submittedAt).toLocaleString() : 'Recently'}
                    </span>
                    <a
                      href={`mailto:${inq.email}?subject=RE: Your Project Inquiry - M.S Solutions&body=Dear ${encodeURIComponent(inq.fullName)},%0D%0A%0D%0AThank you for reaching out to M.S Solutions regarding ${encodeURIComponent(inq.serviceInterest || 'your project')}.`}
                      className="btn btn--primary btn--sm"
                    >
                      Reply to Client <ArrowUpRight size={14} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="admin-empty">
              <Mail size={36} />
              <h3>No inquiries received yet</h3>
              <p>Inquiries submitted via the Contact page will be recorded here in real-time.</p>
            </div>
          )}
        </section>
      )}
    </div>
  );
}

export default AdminPage;

