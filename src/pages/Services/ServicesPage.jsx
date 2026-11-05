import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../../components/common/Button/Button';
import CtaBand from '../../components/sections/CtaBand';
import { SERVICES } from '../../data/servicesData';
import stackImg from '../../assets/images/stack.svg';
import useScrollReveal from '../../utils/useScrollReveal';
import usePageMeta from '../../utils/usePageMeta';
import '../../components/sections/sections.css';
import './ServicesPage.css';

export function ServicesPage() {
  usePageMeta('Services', 'Web applications, mobile apps, SaaS products, school websites and ongoing software support from M.S Solutions.');
  useScrollReveal();

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <span className="eyebrow">Services</span>
            <h1>What we build</h1>
            <p className="lead">
              From full-stack web applications and mobile apps to SaaS platforms and school websites, we build
              modern software that is straightforward to run and easy to extend.
            </p>
          </div>
          <figure className="figure">
            <img src={stackImg} width="1200" height="900" alt="Our technology stack in four layers" />
          </figure>
        </div>
      </section>

      <section className="section" aria-label="Service details">
        <div className="container">
          {SERVICES.map((s, i) => (
            <article key={s.id} id={s.id} className="svc-detail reveal-on-scroll">
              <div className="svc-detail__title">
                <span className="num svc-detail__num">{String(i + 1).padStart(2, '0')}</span>
                <h2>{s.title}</h2>
                <span className="svc-detail__cat">{s.category}</span>
              </div>
              <div className="svc-detail__body">
                <p className="lead">{s.description}</p>
                <h4>What is included</h4>
                <ul className="dash-list svc-detail__features">
                  {s.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <h4>Built with</h4>
                <div className="tags">{s.technologies.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                <Button href={`/contact?service=${s.id}`} variant="link" iconRight={<ArrowRight size={16} />}>
                  Ask about this service
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="Have a project in mind?" />
    </>
  );
}

export default ServicesPage;
