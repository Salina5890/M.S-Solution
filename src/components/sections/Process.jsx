import React from 'react';
import { WORKFLOW_STEPS } from '../../data/workflowData';

export function Process() {
  return (
    <section className="section section--tint" id="process" aria-labelledby="process-title">
      <div className="container">
        <div className="section-head reveal-on-scroll">
          <div>
            <span className="eyebrow">How we work</span>
            <h2 id="process-title">Six steps from idea to launch</h2>
          </div>
          <p>The same process for every project, so you always know what happens next.</p>
        </div>

        <ol className="steps">
          {WORKFLOW_STEPS.map((s, i) => (
            <li key={s.step} className={`step reveal-on-scroll reveal-delay-${(i % 3) + 1}`}>
              <span className="step__num num">{s.step}</span>
              <h3>{s.title}</h3>
              <span className="step__sub">{s.subtitle}</span>
              <p>{s.description}</p>
              <ul className="dash-list">
                {s.deliverables.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Process;
