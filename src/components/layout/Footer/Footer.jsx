import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import Logo from '../../common/Logo/Logo';
import { BRAND, FOOTER_SECTIONS } from '../../../utils/navigation';
import './Footer.css';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top-divider" />
      <div className="container">
        <div className="site-footer__grid">
          {/* Brand & Mission */}
          <div className="site-footer__brand">
            <Link to="/" aria-label="M.S Solutions, home">
              <Logo theme="dark" size={46} />
            </Link>
            <p className="site-footer__desc">{BRAND.description}</p>

            {/* Direct Contact Links */}
            <div className="site-footer__direct-contact">
              <a href={`mailto:${BRAND.email}`} className="site-footer__contact-item">
                <span className="contact-icon contact-icon--mail">
                  <Mail size={16} />
                </span>
                <span>{BRAND.email}</span>
              </a>
              <a href={BRAND.phoneHref} className="site-footer__contact-item">
                <span className="contact-icon contact-icon--phone">
                  <Phone size={16} />
                </span>
                <span>{BRAND.phone}</span>
              </a>
            </div>

            {/* Social Channels with Authentic Brand Colors */}
            <div className="site-footer__social-section">
              <span className="site-footer__social-title">Connect with us</span>
              <div className="site-footer__social-links">
                <a
                  href={BRAND.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn social-btn--linkedin"
                  aria-label="LinkedIn"
                  title="M.S Solutions on LinkedIn"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={12} className="social-btn__arrow" />
                </a>

                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn social-btn--instagram"
                  aria-label="Instagram"
                  title="M.S Solutions on Instagram"
                >
                  <Instagram size={18} />
                  <span>Instagram</span>
                  <ArrowUpRight size={12} className="social-btn__arrow" />
                </a>

                <a
                  href={BRAND.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn social-btn--facebook"
                  aria-label="Facebook"
                  title="M.S Solutions on Facebook"
                >
                  <Facebook size={18} />
                  <span>Facebook</span>
                  <ArrowUpRight size={12} className="social-btn__arrow" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links Columns */}
          {FOOTER_SECTIONS.map((s) => (
            <nav key={s.title} className="site-footer__nav" aria-label={s.title}>
              <h4>{s.title}</h4>
              <ul>
                {s.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Footer Bottom Bar */}
        <div className="site-footer__bottom">
          <p>&copy; {new Date().getFullYear()} M.S Solutions. All rights reserved.</p>
          <p className="site-footer__slogan">{BRAND.slogan}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
