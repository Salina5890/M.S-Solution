import React from 'react';

const PRINCIPLES = [
  ['Direct access', 'No account managers or hand-offs. You talk to the people building your software.'],
  ['Defined scope', 'We agree on scope and milestones before any code is written, so there are fewer surprises later.'],
  ['Support after launch', 'We handle deployment, hand over documentation and stay available for fixes and updates.'],
];

export function Intro() {
  return (
    <section className="section" aria-labelledby="intro-title">
      <div className="container">
        <div className="intro reveal-on-scroll">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2 id="intro-title">A small team that stays close to the work.</h2>
          </div>
          <div className="intro__copy">
            <p className="lead">
              M.S Solutions is an early-stage software company. We take on projects where a small group of
              experienced engineers is an advantage: school systems, internal business tools and the first
              versions of SaaS products.
            </p>
            <p>
              We build mostly with Angular, ASP.NET Core and Flutter, and host on modern cloud platforms.
              When we are done, you own the source code and the intellectual property.
            </p>
          </div>
        </div>

        <ul className="principles">
          {PRINCIPLES.map(([t, d], i) => (
            <li key={t} className={`reveal-on-scroll reveal-delay-${i + 1}`}>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Intro;
