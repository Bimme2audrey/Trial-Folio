import React from 'react';
import { SiCss, SiGithub, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { Component, Compass, MonitorSmartphone, SwatchBook } from 'lucide-react';
import './Skills.css';

// Each key wears its brand colour; 'ink' means the mark is black/white by design (Next.js, GitHub).
const groups = [
  {
    title: 'Build',
    note: 'The stack I reach for every day.',
    keys: [
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3 & Motion', Icon: SiCss, color: '#663399' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#E8C800' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'React', Icon: SiReact, color: '#1FA8D1' },
      { name: 'Next.js', Icon: SiNextdotjs, color: 'var(--ink)' },
      { name: 'Git & GitHub', Icon: SiGithub, color: 'var(--ink)' },
    ],
  },
  {
    title: 'Approach',
    note: 'How I think about interfaces.',
    keys: [
      { name: 'Responsive thinking', Icon: MonitorSmartphone, color: 'var(--accent)' },
      { name: 'UX thinking', Icon: Compass, color: 'var(--accent)' },
      { name: 'Component architecture', Icon: Component, color: 'var(--accent)' },
      { name: 'Design systems', Icon: SwatchBook, color: 'var(--accent)' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <span className="section-index mono">02 — Skills</span>
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
                    <button type="button" className="skill-key" style={{ '--brand': k.color }}>
                      <k.Icon className="skill-icon" aria-hidden="true" />
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
