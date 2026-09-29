import React from 'react';
import './Experience.css';

const timeline = [
  {
    period: 'Jul 2025 — Now',
    place: 'Anexiums',
    role: 'Frontend Developer',
    note: 'Designing and building responsive, visually polished interfaces for client and in-house products.',
    current: true,
  },
  {
    period: 'Jan — Jun 2025',
    place: 'CAPVETS Company Ltd',
    role: 'IT Volunteer',
    note: 'Handled day-to-day IT work and helped shape the company’s web presence and ordering platform.',
  },
  {
    period: 'May — Aug 2024',
    place: 'Zotech Designs',
    role: 'Student Intern · ReactJS',
    note: 'Frontend training on real-time projects, with a focus on teamwork, soft skills and React.',
  },
  {
    period: 'Jul — Aug 2023',
    place: 'Highupweb Academy',
    role: 'Student Intern · Web Development',
    note: 'First hands-on steps into professional web development.',
  },
  {
    period: 'Education',
    place: 'Siantou University Institute, Yaoundé',
    role: 'Computer Science',
    note: 'Studied computer science with a specialisation in web development.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head">
          <span className="section-index mono">04 — Experience</span>
          <h2 className="section-title display reveal">Path</h2>
          <p className="section-lede reveal" style={{ '--d': '0.1s' }}>
            Where I&apos;ve worked, studied and learned to ship.
          </p>
        </div>

        <ol className="xp-list">
          {timeline.map((item, i) => (
            <li key={item.place} className="xp-item reveal" style={{ '--d': `${i * 0.07}s` }}>
              <span className={`xp-period mono ${item.current ? 'is-current' : ''}`}>{item.period}</span>
              <span className="xp-node" aria-hidden="true" />
              <div className="xp-card nm">
                <h3 className="xp-role display">{item.role}</h3>
                <p className="xp-place">{item.place}</p>
                <p className="xp-note">{item.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
