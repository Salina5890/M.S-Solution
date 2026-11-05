import React from 'react';
import Button from '../../components/common/Button/Button';
import usePageMeta from '../../utils/usePageMeta';

export function NotFoundPage() {
  usePageMeta('Page not found');
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 640 }}>
        <span className="eyebrow">Error 404</span>
        <h1 style={{ margin: '1rem 0 1.25rem' }}>Page not found</h1>
        <p className="lead" style={{ marginBottom: '2rem' }}>
          The page you are looking for does not exist or has moved. Try the home page, or get in touch and we will point you in the right direction.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="secondary">Contact us</Button>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
