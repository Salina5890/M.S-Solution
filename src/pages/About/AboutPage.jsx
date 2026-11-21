import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Cpu, Code2, Users2, Zap } from 'lucide-react';
import Button from '../../components/common/Button/Button';
import CtaBand from '../../components/sections/CtaBand';
import shopsphereImg from '../../assets/images/concept-shopsphere.svg';
import businesspilotImg from '../../assets/images/concept-businesspilot.svg';
import useScrollReveal from '../../utils/useScrollReveal';
import usePageMeta from '../../utils/usePageMeta';
import '../Services/ServicesPage.css';
import './AboutPage.css';

const PILLARS = [
  [
    'Practical Engineering Philosophy',
    'Great digital products should run quietly, load instantly, and drive measurable revenue. We favor clean, modular architectures that scale gracefully without piling up technical debt or vendor lock-in.',
  ],
  [
    'Who We Partner With',
    'Ambitious small businesses, fast-scaling e-commerce retailers, and early-stage startups internationally. Organisations that demand senior engineering firepower without bureaucratic agency layers or bloated overhead.',
  ],
  [
    'Integrity & 100% Client Ownership',
    'We build with radical transparency. You retain complete, unencumbered ownership of all source code, Figma design files, and cloud infrastructure credentials. No proprietary traps or hostage codebases.',
  ],
];

const COMMITMENTS = [
  [
    'Senior Full-Stack Discipline',
    'Strict typing with TypeScript, component systems in React and Next.js, resilient backends in ASP.NET Core and Node, and 60fps mobile applications engineered in Flutter.',
  ],
  [
    'Direct Developer Communication',
    'No account coordinators or non-technical intermediaries. You collaborate directly with the software engineers writing and deploying your system.',
  ],
  [
    'Commercial & Conversion Focus',
    'We engineer software to generate commercial returns: eliminating cart abandonment, streamlining customer onboarding, and automating high-friction manual operations.',
  ],
  [
    'Proactive Post-Launch Support',
    'We stand behind every release with rigorous warranty periods, performance profiling, continuous security updates, and flexible growth roadmap sprints.',
  ],
];

const STATS = [
  { value: '2026', label: 'Established', sub: 'Built on modern cloud standards' },
  { value: '100%', label: 'IP Ownership', sub: 'Complete code handover guaranteed' },
  { value: 'Sub-1s', label: 'Speed Target', sub: 'Engineered for conversion velocity' },
  { value: 'Direct', label: 'Lead Engineers', sub: 'Zero non-technical middlemen' },
];

export function AboutPage() {
  usePageMeta(
    'About Us & Engineering Mission',
    'Learn about M.S Solutions — a professional digital solutions agency engineering custom web, e-commerce, mobile, and SaaS software for businesses internationally.'
  );
  useScrollReveal();

  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container about-hero">
          <span className="eyebrow">
            <Sparkles size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
            About M.S Solutions
          </span>
          <h1>Powering businesses through practical, high-performance technology.</h1>
          <p className="lead">
            M.S Solutions is a digital solutions agency dedicated to engineering dependable, human-centered software.
            We partner with small businesses, emerging e-commerce brands, and startups to build custom platforms that solve
            real commercial problems and scale reliably.
          </p>
        </div>
      </section>

      {/* Agency Stats Band */}
      <section className="section section--tint about-stats-section" aria-label="Key agency metrics">
        <div className="container">
          <div className="about-stats-grid">
            {STATS.map((s) => (
              <div key={s.label} className="about-stat-card reveal-on-scroll">
                <span className="about-stat-card__val">{s.value}</span>
                <span className="about-stat-card__label">{s.label}</span>
                <span className="about-stat-card__sub">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section" id="philosophy" aria-label="Our engineering philosophy">
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
            <img
              src={businesspilotImg}
              width="1200"
              height="900"
              alt="M.S Solutions executive dashboard concept representing clean technical architecture"
              loading="lazy"
            />
            <figcaption>Our BusinessPilot architecture model: clean telemetry designed for clarity and speed.</figcaption>
          </figure>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="section section--tint" id="commitments" aria-labelledby="commit-title">
        <div className="container">
          <div className="section-head reveal-on-scroll">
            <div>
              <span className="eyebrow">Our Guiding Standards</span>
              <h2 id="commit-title">What to expect when collaborating with us</h2>
            </div>
            <p>From initial discovery and architectural modeling to production cloud deployment.</p>
          </div>
          <div className="why-grid">
            {COMMITMENTS.map(([t, d], i) => (
              <div key={t} className={`why-card reveal-on-scroll reveal-delay-${i + 1}`}>
                <div className="why-card__icon-box">
                  <ShieldCheck size={24} />
                </div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBand title="Let's build a practical digital solution for your business." />
    </div>
  );
}

export default AboutPage;
