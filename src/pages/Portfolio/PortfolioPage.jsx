import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Layers, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import Button from '../../components/common/Button/Button';
import CtaBand from '../../components/sections/CtaBand';
import { PORTFOLIO_PROJECTS } from '../../data/portfolioData';
import salonflowImg from '../../assets/images/concept-salonflow.svg';
import shopsphereImg from '../../assets/images/concept-shopsphere.svg';
import businesspilotImg from '../../assets/images/concept-businesspilot.svg';
import useScrollReveal from '../../utils/useScrollReveal';
import usePageMeta from '../../utils/usePageMeta';
import './PortfolioPage.css';

const PROJECT_IMAGES = {
  salonflow: [salonflowImg, 'SalonFlow salon and wellness booking platform interface mockup'],
  shopsphere: [shopsphereImg, 'ShopSphere headless e-commerce storefront with slide-out checkout drawer'],
  businesspilot: [businesspilotImg, 'BusinessPilot executive SaaS operations and revenue intelligence console'],
};

const CATEGORIES = ['All Concepts', 'Web & Mobile', 'E-commerce Platform', 'SaaS Platform'];

export function PortfolioPage() {
  usePageMeta(
    'Portfolio & Concept Demonstrations',
    'Explore concept demonstrations and architectural blueprints engineered by M.S Solutions, including SalonFlow, ShopSphere, and BusinessPilot.'
  );
  useScrollReveal();

  const [activeFilter, setActiveFilter] = useState('All Concepts');

  const filteredProjects = PORTFOLIO_PROJECTS.filter((p) => {
    if (activeFilter === 'All Concepts') return true;
    return p.category.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(p.category.toLowerCase());
  });

  return (
    <div className="portfolio-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="portfolio-hero__content">
            <span className="eyebrow">
              <Sparkles size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
              Architecture Demonstrations
            </span>
            <h1>Engineering concepts built to demonstrate real-world solutions.</h1>
            <p className="lead">
              We believe great engineering speaks for itself. Below are three functional architectural blueprints
              and concept demonstrations created by M.S Solutions to illustrate our product design, technical discipline,
              and full-stack execution.
            </p>

            {/* Transparent Transparency Banner */}
            <div className="portfolio-disclaimer" role="note">
              <ShieldCheck size={20} className="portfolio-disclaimer__icon" />
              <div>
                <strong>Transparent Engineering Policy:</strong>
                <span>
                  {' '}These platforms are proprietary concept prototypes and architectural demonstrations built in-house
                  to showcase our technical capabilities honestly. They are not fabricated client claims.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="portfolio-filter-section">
        <div className="container">
          <div className="portfolio-tabs" role="tablist" aria-label="Project categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`portfolio-tab ${activeFilter === cat ? 'is-active' : ''}`}
                onClick={() => setActiveFilter(cat)}
                role="tab"
                aria-selected={activeFilter === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="section portfolio-showcase" aria-label="Concept demonstrations">
        <div className="container">
          <div className="portfolio-list">
            {filteredProjects.map((project, idx) => {
              const [imgSrc, imgAlt] = PROJECT_IMAGES[project.id] || [salonflowImg, project.title];
              const isEven = idx % 2 === 1;

              return (
                <article
                  key={project.id}
                  id={project.id}
                  className={`portfolio-card reveal-on-scroll ${isEven ? 'portfolio-card--flip' : ''}`}
                >
                  {/* Media Mockup */}
                  <div className="portfolio-card__media-wrap">
                    <figure className="portfolio-card__figure">
                      <img
                        src={imgSrc}
                        alt={imgAlt}
                        width="1200"
                        height="900"
                        loading="lazy"
                        className="portfolio-card__img"
                      />
                    </figure>
                    <div className="portfolio-card__status-strip">
                      <span className="concept-pill">Concept Demonstration</span>
                      <span className="status-label">&bull; {project.status}</span>
                    </div>
                  </div>

                  {/* Narrative Body */}
                  <div className="portfolio-card__content">
                    <div className="portfolio-card__meta">
                      <span className="portfolio-card__category">{project.category}</span>
                      <span className="portfolio-card__industry">{project.industry}</span>
                    </div>

                    <h2 className="portfolio-card__title">{project.title}</h2>
                    <p className="portfolio-card__tagline">{project.tagline}</p>
                    <p className="portfolio-card__summary">{project.summary}</p>

                    {/* Challenge vs Solution */}
                    <div className="portfolio-card__box-grid">
                      <div className="portfolio-box portfolio-box--problem">
                        <h4>The Operational Problem</h4>
                        <p>{project.challenge}</p>
                      </div>
                      <div className="portfolio-box portfolio-box--solution">
                        <h4>Our Technical Architecture</h4>
                        <p>{project.solution}</p>
                      </div>
                    </div>

                    {/* Key Architecture Features */}
                    <div className="portfolio-card__features">
                      <h4>Core Architectural Deliverables</h4>
                      <ul className="dash-list">
                        {project.keyFeatures.map((feat) => (
                          <li key={feat}>{feat}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="portfolio-card__tech">
                      <h4>Engineered With</h4>
                      <div className="tags">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="tag tag--navy">{tech}</span>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="portfolio-card__cta">
                      <Button
                        href={`/contact?service=${project.id}`}
                        size="md"
                        iconRight={<ArrowRight size={16} />}
                      >
                        Discuss Building Something Similar
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Band */}
      <CtaBand
        title="Ready to build your custom web, e-commerce, or SaaS platform?"
      />
    </div>
  );
}

export default PortfolioPage;
