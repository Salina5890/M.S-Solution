import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../common/Button/Button';
import { PORTFOLIO_PROJECTS } from '../../data/portfolioData';
import salonflow from '../../assets/images/concept-salonflow.svg';
import shopsphere from '../../assets/images/concept-shopsphere.svg';
import businesspilot from '../../assets/images/concept-businesspilot.svg';

const IMAGES = {
  salonflow: [salonflow, 'SalonFlow salon and spa booking platform interface mockup'],
  shopsphere: [shopsphere, 'ShopSphere headless e-commerce storefront with slide-out checkout drawer'],
  businesspilot: [businesspilot, 'BusinessPilot executive SaaS operations and revenue intelligence console'],
};

export function Concepts() {
  return (
    <section className="section" id="concepts" aria-labelledby="concepts-title">
      <div className="container">
        <div className="section-head reveal-on-scroll">
          <div>
            <span className="eyebrow">
              <Sparkles size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
              Featured Concept Demonstrations
            </span>
            <h2 id="concepts-title">Practical solutions engineered from first principles</h2>
          </div>
          <p>
            Explore our functional architectural blueprints and concept prototypes. We build them in-house
            to demonstrate our UX design, technical standards, and full-stack execution transparently.
          </p>
        </div>

        <div>
          {PORTFOLIO_PROJECTS.map((c, i) => {
            const [src, alt] = IMAGES[c.id] || [salonflow, c.title];
            const isFlip = i % 2 !== 0;

            return (
              <article key={c.id} className={`concept reveal-on-scroll${isFlip ? ' concept--flip' : ''}`}>
                <figure className="figure concept__media">
                  <img src={src} width="1200" height="900" alt={alt} loading="lazy" />
                  <div className="concept__media-badge">Concept Demonstration</div>
                </figure>
                <div className="concept__text">
                  <span className="eyebrow">{c.category} &middot; {c.industry}</span>
                  <h3>{c.title}</h3>
                  <p className="concept__tagline">{c.tagline}</p>
                  <p>{c.summary}</p>
                  <ul className="dash-list">
                    {c.keyFeatures.slice(0, 3).map((h) => <li key={h}>{h}</li>)}
                  </ul>
                  <div className="tags">{c.techStack.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                  <div className="concept__actions">
                    <Button href="/portfolio" variant="link" iconRight={<ArrowRight size={16} />}>
                      Read architectural case breakdown
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="concepts__cta-wrap">
          <Button href="/portfolio" size="lg" iconRight={<ArrowRight size={16} />}>
            View All Concept Demonstrations
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Concepts;
