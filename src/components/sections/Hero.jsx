import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button/Button';
import { SERVICES } from '../../data/servicesData';
import heroImg from '../../assets/images/hero.svg';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__text">
            <span className="eyebrow">Software company &middot; Web, mobile &amp; SaaS</span>
            <h1 id="hero-title">Software built for schools and growing businesses.</h1>
            <p className="lead">
              M.S Solutions designs and builds web applications, mobile apps and SaaS products. You work
              directly with the engineers writing your software, and we stay on after launch to keep it running.
            </p>
            <div className="hero__actions">
              <Button href="/contact" size="lg">Start a conversation</Button>
              <Button href="/services" variant="link" iconRight={<ArrowRight size={16} />}>See our services</Button>
            </div>
          </div>

          <figure className="figure hero__figure">
            <img src={heroImg} width="1200" height="900" alt="Example school admissions dashboard with a parent notices screen on a phone" />
            <figcaption>Concept screens with illustrative data.</figcaption>
          </figure>
        </div>

        <ul className="hero__strip" aria-label="Services">
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
