import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button/Button';
import { SERVICES } from '../../data/servicesData';

export function ServicesList() {
  return (
    <section className="section section--tint" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head reveal-on-scroll">
          <div>
            <span className="eyebrow">Services</span>
            <h2 id="services-title">What we build</h2>
          </div>
          <p>Five focused areas of work. If your project sits between two of them, tell us and we will scope it together.</p>
        </div>

        <ol className="svc-list">
          {SERVICES.map((s, i) => (
            <li key={s.id} className="svc-row reveal-on-scroll">
              <span className="svc-row__num num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{s.title}</h3>
                <span className="svc-row__cat">{s.category}</span>
              </div>
              <div className="svc-row__body">
                <p>{s.description}</p>
                <ul className="dash-list svc-row__features">
                  {s.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="svc-list__more">
          <Button href="/services" variant="link" iconRight={<ArrowRight size={16} />}>Details and tech stack for each service</Button>
        </div>
      </div>
    </section>
  );
}

export default ServicesList;
