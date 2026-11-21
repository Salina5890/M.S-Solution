import React from 'react';
import { Users, ShieldCheck, Zap, Layers, RefreshCw, Award } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: Users,
    title: 'Direct Senior Engineer Collaboration',
    description:
      'No middlemen, junior handoffs, or non-technical project managers. You communicate directly with the software engineers architecting and coding your solution.',
  },
  {
    icon: Zap,
    title: 'High-Converting & Business-Focused',
    description:
      'We do not just write code — we engineer commercial outcomes. Every interface is optimized to reduce checkout friction, elevate conversion rates, and accelerate user workflows.',
  },
  {
    icon: ShieldCheck,
    title: '100% Intellectual Property Ownership',
    description:
      'You maintain complete, unencumbered ownership of all source code, Figma designs, database schemas, and cloud deployment pipelines from day one.',
  },
  {
    icon: Layers,
    title: 'Scalable Full-Stack Engineering',
    description:
      'We build on battle-tested frameworks (React, Next.js, Angular, ASP.NET Core, Flutter) with clean separation of concerns, strict typing, and automated testing.',
  },
  {
    icon: RefreshCw,
    title: 'Agile Transparency & Milestone Delivery',
    description:
      'Know exactly where your budget and timeline stand. Every project is scoped with clear sprint milestones, live preview builds, and transparent progress updates.',
  },
  {
    icon: Award,
    title: 'Continuous Post-Launch Partnership',
    description:
      'We do not disappear after deployment. We provide proactive security patch maintenance, cloud infrastructure audits, and continuous iterative enhancements.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="section" id="why-us" aria-labelledby="why-title">
      <div className="container">
        <div className="section-head reveal-on-scroll">
          <div>
            <span className="eyebrow">The Agency Difference</span>
            <h2 id="why-title">Why ambitious businesses choose M.S Solutions</h2>
          </div>
          <p>
            We combine high-tier engineering rigour with the agility and personal dedication of a focused digital team.
          </p>
        </div>

        <div className="why-grid">
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className={`why-card reveal-on-scroll reveal-delay-${(idx % 3) + 1}`}
              >
                <div className="why-card__icon-box">
                  <Icon size={24} />
                </div>
                <h3>{adv.title}</h3>
                <p>{adv.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
