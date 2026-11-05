import React from 'react';
import stackImg from '../../assets/images/stack.svg';

const STACK = [
  ['Frontend', 'Angular & TypeScript', 'Structured, type-safe client applications.', ['Angular', 'TypeScript', 'RxJS', 'SCSS']],
  ['Backend', 'C# & ASP.NET Core', 'Fast APIs, authentication and database access.', ['C#', 'ASP.NET Core', 'EF Core', 'REST APIs']],
  ['Mobile', 'Flutter & Dart', 'Android apps with offline caching and Firebase.', ['Flutter', 'Dart', 'Android SDK', 'Firebase']],
  ['Data & hosting', 'Databases & containers', 'Reliable storage and repeatable deployments.', ['PostgreSQL', 'SQL Server', 'Docker', 'Redis']],
];

export function TechStack() {
  return (
    <section className="section" id="tech" aria-labelledby="tech-title">
      <div className="container tech">
        <div className="tech__intro reveal-on-scroll">
          <span className="eyebrow">Tools</span>
          <h2 id="tech-title">The technology we build with</h2>
          <p className="lead">
            We prefer mature, well-supported tools that other engineers can pick up easily. That keeps your
            software maintainable long after launch.
          </p>
          <figure className="figure">
            <img src={stackImg} width="1200" height="900" alt="Diagram of our stack: client, API, mobile, and data and hosting layers" loading="lazy" />
          </figure>
        </div>

        <ul className="tech__list">
          {STACK.map(([cat, title, desc, tags]) => (
            <li key={cat} className="reveal-on-scroll">
              <span className="eyebrow">{cat}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="tags">{tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TechStack;
