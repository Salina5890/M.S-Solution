import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './Layout.css';

export function Layout({ children }) {
  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content" className="app-shell__main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
