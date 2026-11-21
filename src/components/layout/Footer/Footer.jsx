import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, Linkedin, Instagram, Facebook } from 'lucide-react';
import logoOfficial from '../../../assets/brand/logo-official.jpg';
import { BRAND } from '../../../utils/navigation';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer-root">
      <div className="container">
        {/* Main 4-Column Grid */}
        <div className="footer-grid">
          {/* Section 1 — Brand */}
          <div className="footer-col footer-col--brand">
            <Link to="/" className="footer-brand__logo-wrap" aria-label="M.S Solutions, Home" title="M.S Solutions">
              <div className="footer-brand__logo-container">
                <img
                  src={logoOfficial}
                  alt="M.S Solutions Logo"
                  className="footer-brand__logo-img"
                  width="85"
                  height="85"
                />
              </div>
            </Link>
            <p className="footer-brand__tagline">{BRAND.slogan}</p>
            <p className="footer-brand__desc">
              We build digital experiences, scalable software solutions and technology that help businesses grow.
            </p>
          </div>

          {/* Section 2 — Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Section 3 — Our Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/services#web-development">Web Development</Link></li>
              <li><Link to="/services#mobile-app-development">Mobile App Development</Link></li>
              <li><Link to="/services#saas-development">SaaS Development</Link></li>
              <li><Link to="/services#ui-ux-design">UI/UX Design</Link></li>
              <li><Link to="/services#social-media-management">Social Media Management</Link></li>
            </ul>
          </div>

          {/* Section 4 — Get in Touch */}
          <div className="footer-col footer-col--contact">
            <h4 className="footer-heading">Get in Touch</h4>
            <div className="footer-contact-items">
              <a href={`mailto:${BRAND.email}`} className="footer-contact-link">
                <Mail size={16} className="footer-contact-icon" aria-hidden="true" />
                <span>{BRAND.email}</span>
              </a>

              <a href={BRAND.website} target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                <Globe size={16} className="footer-contact-icon" aria-hidden="true" />
                <span>https://m-ssolution.web.app</span>
              </a>

              <a href={BRAND.phoneHref} className="footer-contact-link">
                <Phone size={16} className="footer-contact-icon" aria-hidden="true" />
                <span>{BRAND.phone}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="footer-social-section">
              <span className="footer-social-label">Follow Us</span>
              <div className="footer-social-row">
                <a
                  href={BRAND.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn footer-social-btn--linkedin"
                  aria-label="M.S Solutions on LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn footer-social-btn--instagram"
                  aria-label="M.S Solutions on Instagram"
                  title="Instagram"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href={BRAND.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn footer-social-btn--facebook"
                  aria-label="M.S Solutions on Facebook"
                  title="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="footer-bottom">
          <p className="footer-bottom__copy">
            &copy; {new Date().getFullYear()} M.S Solutions. All rights reserved.
          </p>
          <div className="footer-bottom__links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="footer-bottom__divider" aria-hidden="true">&bull;</span>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
