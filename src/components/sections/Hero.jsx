import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button/Button';
import { SERVICES } from '../../data/servicesData';
import shopsphereImg from '../../assets/images/concept-shopsphere.svg';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__text">
            <span className="eyebrow">
              <Sparkles size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
              Digital Solutions Agency &middot; Web, E-commerce, Mobile &amp; SaaS
            </span>
            <h1 id="hero-title">
              Powering businesses through high-performing digital technology.
            </h1>
            <p className="lead">
              M.S Solutions designs, engineers, and scales custom software for small businesses, modern e-commerce brands,
              and startups internationally. You work directly with senior engineers to turn complex business needs into fast,
              accessible, and scalable digital products.
            </p>

            <div className="hero__actions">
              <Button href="/contact" size="lg">Start a Project</Button>
              <Button href="/portfolio" variant="link" iconRight={<ArrowRight size={16} />}>
                Explore Concept Portfolio
              </Button>
            </div>

            {/* Value Proof Badges */}
            <div className="hero__proof-badges">
              <div className="proof-badge">
                <CheckCircle2 size={16} className="proof-badge__icon" />
                <span>100% IP &amp; Code Ownership</span>
              </div>
              <div className="proof-badge">
                <Shield size={16} className="proof-badge__icon" />
                <span>Direct Lead Developer Access</span>
              </div>
              <div className="proof-badge">
                <Zap size={16} className="proof-badge__icon" />
                <span>Modern, High-Speed Architecture</span>
              </div>
            </div>
          </div>

          <figure className="figure hero__figure">
            <img
              src={shopsphereImg}
              width="1200"
              height="900"
              alt="M.S Solutions custom e-commerce and web application architecture interface preview"
              className="hero__img"
            />
            <figcaption>Interactive concept preview: ShopSphere headless e-commerce architecture.</figcaption>
          </figure>
        </div>

        {/* 6 Services Quick-Strip */}
        <ul className="hero__strip" aria-label="Services quick navigation">
          {SERVICES.map((s, i) => (
            <li key={s.id}>
              <Link to={`/services#${s.id}`}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                {s.short}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Hero;
