import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Mail, Phone, Facebook, Instagram, Linkedin, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import logoWhite from '../../assets/brand/logo-full-white.png';
import { BRAND } from '../../utils/navigation';
import { SERVICES } from '../../data/servicesData';
import usePageMeta from '../../utils/usePageMeta';
import './ContactPage.css';

const TOPICS = ['General inquiry', ...SERVICES.map((s) => s.title), 'Technical consultation', 'Other'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactPage() {
  usePageMeta('Contact', 'Contact M.S Solutions about a web application, mobile app, SaaS product or school website.');
  const [params] = useSearchParams();
  const matched = SERVICES.find((s) => s.id === params.get('service'));

  const initial = { name: '', email: '', organization: '', subject: matched ? matched.title : TOPICS[0], message: '' };
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sentService, setSentService] = useState(null);
  const [failed, setFailed] = useState(false);

  const set = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value });
    if (errors[key]) setErrors({ ...errors, [key]: null });
  };

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 2) e.name = 'Please enter your name.';
    if (!EMAIL_RE.test(form.email.trim())) e.email = 'Please enter a valid email address.';
    if (form.message.trim().length < 10) e.message = 'Please write at least 10 characters.';
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    setFailed(false);
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setSending(true);
    try {
      // 1. Submit inquiry to Firebase Firestore
      const { submitProjectInquiry } = await import('../../lib/firebase');
      await submitProjectInquiry({
        name: form.name,
        email: form.email,
        organization: form.organization,
        serviceInterest: form.subject,
        projectType: 'contact-form-message',
        budgetRange: 'Not applicable',
        message: form.message,
      });

      // 2. Dispatch instant notification & service packet
      const { handleInquiryNotification } = await import('../../lib/notifications');
      const notifyResult = await handleInquiryNotification({
        name: form.name,
        email: form.email,
        organization: form.organization,
        serviceInterest: form.subject,
        projectType: 'Contact Inquiry',
        message: form.message,
      });

      if (notifyResult?.serviceInfo) {
        setSentService(notifyResult.serviceInfo);
      }

      setSent(true);
    } catch (err) {
      console.error('Contact form error:', err);
      setFailed(true);
    } finally {
      setSending(false);
    }
  };

  const mailto = `mailto:${BRAND.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(form.message)}`;

  const field = (id, label, input, key, optional) => (
    <div className="field">
      <label htmlFor={id}>{label}{optional && <span className="field__opt">Optional</span>}</label>
      {input}
      {errors[key] && <p className="field__err" role="alert">{errors[key]}</p>}
    </div>
  );

  return (
    <div className="contact">
      <aside className="contact__side">
        <div className="contact__side-inner">
          <img className="contact__logo" src={logoWhite} alt="M.S Solutions" width="200" />
          <h1>Let&rsquo;s talk about your project.</h1>
          <p>
            Tell us what you need. Whether it is a school website, a mobile app or a SaaS product, we will
            reply by email.
          </p>
          <ul className="contact__links">
            <li>
              <a href={`mailto:${BRAND.email}`}>
                <span className="contact__icon-badge contact__icon-badge--mail">
                  <Mail size={18} aria-hidden="true" />
                </span>
                <span>{BRAND.email}</span>
              </a>
            </li>
            <li>
              <a href={BRAND.phoneHref}>
                <span className="contact__icon-badge contact__icon-badge--phone">
                  <Phone size={18} aria-hidden="true" />
                </span>
                <span>{BRAND.phone}</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/m.s-solutions/home/" target="_blank" rel="noopener noreferrer" title="M.S Solutions on LinkedIn">
                <span className="contact__icon-badge contact__icon-badge--linkedin">
                  <Linkedin size={18} aria-hidden="true" />
                </span>
                <span>M.S Solutions on LinkedIn</span>
              </a>
            </li>
            <li>
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" title="M.S Solutions on Instagram">
                <span className="contact__icon-badge contact__icon-badge--instagram">
                  <Instagram size={18} aria-hidden="true" />
                </span>
                <span>{BRAND.instagramHandle}</span>
              </a>
            </li>
            <li>
              <a href={BRAND.facebook} target="_blank" rel="noopener noreferrer" title="M.S Solutions on Facebook">
                <span className="contact__icon-badge contact__icon-badge--facebook">
                  <Facebook size={18} aria-hidden="true" />
                </span>
                <span>M.S Solutions on Facebook</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <section className="contact__main" aria-labelledby="form-title">
        <div className="contact__form-wrap">
          {sent ? (
            <div className="contact__sent" role="status">
              <CheckCircle2 size={42} aria-hidden="true" style={{ color: 'var(--success)' }} />
              <h2>Inquiry Submitted Successfully!</h2>
              <p>
                Thank you, <strong>{form.name.trim() || 'there'}</strong>. We have received your message and sent a copy to{' '}
                <strong>{form.email}</strong>. Our engineering team at M.S Solutions will review your requirements.
              </p>

              {sentService && (
                <div className="contact__sent-service" style={{
                  margin: '1.5rem 0',
                  padding: '1.25rem',
                  background: 'var(--navy-faint)',
                  border: '1px solid var(--navy-tint)',
                  borderRadius: 'var(--radius)',
                  textAlign: 'left'
                }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--navy-mid)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Service Details Overview
                  </span>
                  <h3 style={{ fontSize: '1.15rem', margin: '0.25rem 0 0.5rem', color: 'var(--navy-deep)' }}>
                    {sentService.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--charcoal)', marginBottom: '0.75rem', lineHeight: 1.5 }}>
                    {sentService.shortDesc || sentService.summary}
                  </p>
                  {sentService.deliverables && (
                    <ul style={{ fontSize: '0.85rem', color: 'var(--muted)', paddingLeft: '1.2rem', margin: 0 }}>
                      {sentService.deliverables.slice(0, 3).map((d, i) => (
                        <li key={i} style={{ marginBottom: '0.25rem' }}>{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
                <a href={BRAND.phoneHref} className="btn btn--primary btn--md">
                  Call Us Directly ({BRAND.phone})
                </a>
                <button
                  type="button"
                  className="btn btn--secondary btn--md"
                  onClick={() => {
                    setSent(false);
                    setSentService(null);
                    setForm(initial);
                  }}
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <>
              <h2 id="form-title">Send us a message</h2>
              <p className="contact__hint">Fields marked * are required.</p>

              {failed && (
                <div className="contact__error" role="alert">
                  <AlertCircle size={18} aria-hidden="true" />
                  <p>
                    We could not send your message from the website just now. Please{' '}
                    <a href={mailto}>email us directly</a> and we will get back to you.
                  </p>
                </div>
              )}

              <form onSubmit={submit} noValidate>
                <div className="field-row">
                  {field('c-name', 'Full name *', <input id="c-name" autoComplete="name" value={form.name} onChange={set('name')} disabled={sending} aria-invalid={Boolean(errors.name)} />, 'name')}
                  {field('c-email', 'Email *', <input id="c-email" type="email" autoComplete="email" value={form.email} onChange={set('email')} disabled={sending} aria-invalid={Boolean(errors.email)} />, 'email')}
                </div>
                <div className="field-row">
                  {field('c-subject', 'Topic', (
                    <select id="c-subject" value={form.subject} onChange={set('subject')} disabled={sending}>
                      {TOPICS.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  ), 'subject')}
                  {field('c-org', 'Organisation', <input id="c-org" autoComplete="organization" value={form.organization} onChange={set('organization')} disabled={sending} />, 'organization', true)}
                </div>
                {field('c-msg', 'Message *', <textarea id="c-msg" rows={6} value={form.message} onChange={set('message')} disabled={sending} aria-invalid={Boolean(errors.message)} placeholder="What would you like to build, and when do you need it?" />, 'message')}

                <button type="submit" className="btn btn--primary btn--lg contact__submit" disabled={sending}>
                  {sending ? (<><Loader2 size={18} className="spin" aria-hidden="true" /> Sending&hellip;</>) : 'Send message'}
                </button>
                <p className="contact__privacy">
                  We use your details only to reply to you. See our <Link to="/privacy">privacy policy</Link>.
                </p>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
