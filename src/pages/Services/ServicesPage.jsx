import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import Button from '../../components/common/Button/Button';
import CtaBand from '../../components/sections/CtaBand';
import { SERVICES } from '../../data/servicesData';
import stackImg from '../../assets/images/stack.svg';
import useScrollReveal from '../../utils/useScrollReveal';
import usePageMeta from '../../utils/usePageMeta';
import '../../components/sections/sections.css';
import './ServicesPage.css';

export function ServicesPage() {
  usePageMeta(
    'Services & Capabilities',
    'Custom web development, high-converting e-commerce storefronts, mobile apps, SaaS engineering, UI/UX design, and social media management from M.S Solutions.'
  );
  useScrollReveal();

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <span className="eyebrow">
              <Sparkles size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
              Engineering &amp; Growth Services
            </span>
            <h1>High-impact digital services designed to scale your business.</h1>
            <p className="lead">
              From bespoke web applications and high-converting e-commerce storefronts to scalable cloud SaaS platforms
              and strategic digital branding, we build robust digital solutions that deliver measurable commercial outcomes.
            </p>
          </div>
          <figure className="figure">
            <img src={stackImg} width="1200" height="900" alt="M.S Solutions modern full-stack technology architecture" />
          </figure>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="section" aria-label="Detailed service capabilities">
        <div className="container">
          {SERVICES.map((s, i) => (
            <article key={s.id} id={s.id} className="svc-detail reveal-on-scroll">
              <div className="svc-detail__title">
                <span className="num svc-detail__num">{String(i + 1).padStart(2, '0')}</span>
                <h2>{s.title}</h2>
                <span className="svc-detail__cat">{s.category}</span>
                {s.badge && <span className="svc-detail__badge-pill">{s.badge}</span>}
              </div>

              <div className="svc-detail__body">
                <p className="lead">{s.description}</p>

                <h4>What We Deliver</h4>
                <ul className="dash-list svc-detail__features">
                  {s.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <h4>Technologies &amp; Frameworks</h4>
                <div className="tags">
                  {s.technologies.map((t) => (
                    <span key={t} className="tag tag--navy">{t}</span>
                  ))}
                </div>

                <div className="svc-detail__actions">
                  <Button
                    href={`/contact?service=${s.id}`}
                    size="md"
                    iconRight={<ArrowRight size={16} />}
                  >
                    Inquire About {s.short}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom Conversion Band */}
      <CtaBand
        title="Ready to build your next digital product with M.S Solutions?"
      />
    </>
  );
}

export default ServicesPage;
