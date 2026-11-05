import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Button / link button.
 * variant: primary | secondary | light | outline-light | link
 * size: sm | md | lg
 * Pass `href` to render a router link (or an <a> for external / # / mailto links).
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  iconRight,
  className = '',
  type = 'button',
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {iconRight && <span className="btn__icon" aria-hidden="true">{iconRight}</span>}
    </>
  );

  if (href) {
    const plain = isExternal || href.startsWith('#') || href.startsWith('mailto:');
    if (plain) {
      return (
        <a
          href={href}
          className={classes}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          {...rest}
        >
          {content}
        </a>
      );
    }
    return <Link to={href} className={classes} {...rest}>{content}</Link>;
  }
  return <button type={type} className={classes} {...rest}>{content}</button>;
}

export default Button;
