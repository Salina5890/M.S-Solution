import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../../common/Logo/Logo';
import Button from '../../common/Button/Button';
import { NAV_LINKS } from '../../../utils/navigation';
import './Header.css';

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  const linkClass = ({ isActive }) => `site-header__link${isActive ? ' is-active' : ''}`;

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-header__brand" aria-label="M.S Solutions, home">
          <Logo size={44} />
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <NavLink to={l.href} end={l.href === '/'} className={linkClass}>{l.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <Button href="/contact" size="sm" className="site-header__cta">Start a project</Button>
          <button
            type="button"
            className="site-header__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="site-header__drawer">
          <nav className="container" aria-label="Mobile">
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <NavLink to={l.href} end={l.href === '/'} className={linkClass}>{l.label}</NavLink>
                </li>
              ))}
            </ul>
            <Button href="/contact" size="md" className="site-header__drawer-cta">Start a project</Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
