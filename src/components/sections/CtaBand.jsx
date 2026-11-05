import React from 'react';
import Button from '../common/Button/Button';
import { BRAND } from '../../utils/navigation';

export function CtaBand({ title = 'Tell us what you need built.' }) {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="container cta__inner">
        <div>
          <span className="eyebrow">Start a project</span>
          <h2 id="cta-title">{title}</h2>
          <p>
            Whether you run a school, a small business or a software team, send us a short description.
            We will reply by email and suggest next steps.
          </p>
        </div>
        <div className="cta__actions">
          <Button href="/contact" variant="light" size="lg">Contact us</Button>
          <a className="cta__mail" href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
        </div>
      </div>
    </section>
  );
}

export default CtaBand;
