import React from 'react';
import './Skills.css';

const groups = [
  {
    title: 'Build',
    note: 'The stack I reach for every day.',
    keys: [
      { name: 'HTML5', glyph: '<>' },
      { name: 'CSS3 & Motion', glyph: '{}' },
      { name: 'Tailwind CSS', glyph: '≈' },
      { name: 'JavaScript', glyph: 'JS' },
      { name: 'TypeScript', glyph: 'TS' },
      { name: 'React', glyph: '⚛' },
      { name: 'Next.js', glyph: 'N' },
      { name: 'Git & GitHub', glyph: '⎇' },
    ],
  },
  {
    title: 'Work',
    note: 'How I show up on a team.',
    keys: [
      { name: 'Creativity', glyph: '✦' },
      { name: 'Communication', glyph: '◎' },
      { name: 'Team Work', glyph: '⁂' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <span className="section-index mono">03 — Skills</span>
          <h2 className="section-title display reveal">Toolkit</h2>
          <p className="section-lede reveal" style={{ '--d': '0.1s' }}>
            Press a key. Tactile is kind of my thing.
          </p>
        </div>

        <div className="skills-board">
          {groups.map((g, gi) => (
            <div key={g.title} className="skills-group reveal" style={{ '--d': `${gi * 0.12}s` }}>
              <div className="skills-group-head">
                <h3 className="display">{g.title}</h3>
                <p>{g.note}</p>
              </div>
              <ul className="skills-keys nm-in">
                {g.keys.map((k) => (
                  <li key={k.name}>
                    <button type="button" className="skill-key">
                      <span className="skill-glyph display" aria-hidden="true">
                        {k.glyph}
                      </span>
                      <span className="skill-name">{k.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
