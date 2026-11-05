import React from 'react';
import markDark from '../../../assets/brand/mark.png';
import markWhite from '../../../assets/brand/mark-white.png';
import './Logo.css';

/**
 * Official M.S Solutions mark with a live-text wordmark.
 * theme: 'light' (for light backgrounds) | 'dark' (for navy backgrounds)
 */
export function Logo({ theme = 'light', size = 44, tagline = false }) {
  return (
    <span className={`logo logo--${theme}`}>
      <img
        className="logo__mark"
        src={theme === 'dark' ? markWhite : markDark}
        alt=""
        style={{ height: size }}
      />
      <span className="logo__text">
        <span className="logo__name">M.S SOLUTIONS</span>
        {tagline && <span className="logo__tag">Powering Businesses Through Technology.</span>}
      </span>
    </span>
  );
}

export default Logo;
