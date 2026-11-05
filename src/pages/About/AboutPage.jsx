import React from 'react';
import CtaBand from '../../components/sections/CtaBand';
import eduflow from '../../assets/images/concept-eduflow.svg';
import useScrollReveal from '../../utils/useScrollReveal';
import usePageMeta from '../../utils/usePageMeta';
import '../Services/ServicesPage.css';
import './AboutPage.css';

const PILLARS = [
  ['The philosophy', 'Great software should run quietly and let an organisation focus on what matters. We build clean architectures that can grow without piling up technical debt.'],
  ['Who we work with', 'Small schools and emerging software businesses: organisations that need strong engineering without bloated costs, bureaucratic layers or needless overhead.'],
  ['Integrity and trust', 'We favour dependable, secure designs over fragile shortcuts. You own 100% of your source code and intellectual property.'],
];

const COMMITMENTS = [
  ['Modern full-stack discipline', 'Strict typing with TypeScript, Angular and C# / ASP.NET Core, plus Flutter apps built for smooth 60fps performance.'],
  ['Transparent collaboration', 'No account managers or middle layers. You work directly with experienced engineers on your specific problem.'],
  ['Continuity after launch', 'We stand behind our code with maintenance, cloud configuration reviews and regular updates.'],
];

export function AboutPage() {
  usePageMeta('About', 'M.S Solutions is a software company building dependable web, mobile and SaaS products for small schools and growing businesses.');
  useScrollReveal();

  return (
    <>
      <section className="page-hero">
        <div className="container about-hero">
          <span className="eyebrow">About M.S Solutions</span>
          <h1>We build software that organisations can rely on.</h1>
          <p className="lead">
            M.S Solutions powers businesses through technology: dependable, human-centred software that is built
            to grow with the people who use it.
          </p>
        </div>
      </section>

      <section className="section" id="philosophy" aria-label="Our philosophy">
        <div className="container about-split">
          <ol className="about-pillars">
            {PILLARS.map(([t, d], i) => (
              <li key={t} className="about-pillar reveal-on-scroll">
                <span className="num about-pillar__num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h2>{t}</h2>
                  <p>{d}</p>
                </div>
              </li>
            ))}
          </ol>
          <figure className="figure reveal-on-scroll">
            <img src={eduflow} width="1200" height="900" alt="Concept school portal showing a student list" loading="lazy" />
            <figcaption>One of our school portal concepts. Illustrative data.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--tint" id="approach" aria-labelledby="commit-title">
        <div className="container">
          <div className="section-head reveal-on-scroll">
            <div>
              <span className="eyebrow">Our commitments</span>
              <h2 id="commit-title">What to expect from us</h2>
            </div>
            <p>Discipline from the first requirements conversation to production deployment.</p>
          </div>
          <ul className="principles">
            {COMMITMENTS.map(([t, d], i) => (
              <li key={t} className={`reveal-on-scroll reveal-delay-${i + 1}`}>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Let's talk about your project." />
    </>
  );
}

export default AboutPage;
