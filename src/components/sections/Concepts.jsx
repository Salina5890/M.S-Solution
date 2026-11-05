import React from 'react';
import { CAPABILITIES } from '../../data/capabilitiesData';
import eduflow from '../../assets/images/concept-eduflow.svg';
import cloudnexus from '../../assets/images/concept-cloudnexus.svg';
import campus from '../../assets/images/concept-campusconnect.svg';
import corepulse from '../../assets/images/concept-corepulse.svg';

const IMAGES = {
  'eduflow-central': [eduflow, 'Concept school portal showing a student list with attendance and fee status'],
  'cloudnexus-saas': [cloudnexus, 'Concept multi-tenant SaaS: tenant list, request flow and subscription plans'],
  'campusconnect-mobile': [campus, 'Concept parent app: sign-in, daily feed and attendance calendar on three phones'],
  'opsdashboard-web': [corepulse, 'Concept operations dashboard with activity chart, audit log and records table'],
};

export function Concepts() {
  return (
    <section className="section" id="concepts" aria-labelledby="concepts-title">
      <div className="container">
        <div className="section-head reveal-on-scroll">
          <div>
            <span className="eyebrow">Product concepts</span>
            <h2 id="concepts-title">How we approach a problem</h2>
          </div>
          <p>
            These are our own concept designs and architecture plans, not client projects. They show how we
            think about real problems in schools and small businesses. Screens use illustrative data.
          </p>
        </div>

        <div>
          {CAPABILITIES.map((c, i) => {
            const [src, alt] = IMAGES[c.id];
            return (
              <article key={c.id} className={`concept reveal-on-scroll${i % 2 ? ' concept--flip' : ''}`}>
                <figure className="figure concept__media">
                  <img src={src} width="1200" height="900" alt={alt} loading="lazy" />
                </figure>
                <div className="concept__text">
                  <span className="eyebrow">{c.badge} &middot; {c.domain}</span>
                  <h3>{c.title}</h3>
                  <p className="concept__tagline">{c.tagline}</p>
                  <p>{c.summary}</p>
                  <ul className="dash-list">
                    {c.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                  <div className="tags">{c.techStack.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                  <p className="concept__status">Status: {c.architectureStatus}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Concepts;
