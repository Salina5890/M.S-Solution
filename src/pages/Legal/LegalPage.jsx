import React from 'react';
import usePageMeta from '../../utils/usePageMeta';
import './LegalPage.css';

export function LegalPage({ doc }) {
  usePageMeta(doc.title, `${doc.title} for the M.S Solutions website.`);
  return (
    <section className="section">
      <div className="container legal">
        <span className="eyebrow">Legal</span>
        <h1>{doc.title}</h1>
        <p className="legal__updated">Last updated: {doc.updated}</p>
        <p className="lead">{doc.intro}</p>
        {doc.sections.map((s) => (
          <div key={s.h} className="legal__block">
            <h2>{s.h}</h2>
            {s.p.map((t) => <p key={t}>{t}</p>)}
          </div>
        ))}
      </div>
    </section>
  );
}

export default LegalPage;
