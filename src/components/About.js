import React from 'react';
import { AppWindow, ArrowUpRight, CodeXml, PenLine, PenTool } from 'lucide-react';
import { profile } from '../data/projects';
import './About.css';

const disciplines = [
  { title: 'Frontend Development', detail: 'React · Next.js · TypeScript', Icon: CodeXml },
  { title: 'Interface Design', detail: 'Responsive UI · Interaction · Motion', Icon: PenTool },
  { title: 'Digital Experiences', detail: 'Websites · E-commerce · Web Applications', Icon: AppWindow },
];

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head">
          <span className="section-index mono">01 — About</span>
          <h2 className="section-title display reveal">
            Hello<span style={{ color: 'var(--accent)' }}>.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p className="about-statement reveal">
              I&apos;m <strong>Bimme Audrey Zun</strong>, a frontend developer from Yaoundé who turns design ideas into
              interfaces that feel <span className="about-soft">soft to the touch</span> and sharp in the details.
            </p>
            <p className="about-body reveal" style={{ '--d': '0.1s' }}>
              I build responsive, user-focused experiences with React and Next.js — from mission-driven non-profit
              sites to conversion-ready storefronts. I care about the space between the pixels: how a button presses,
              how a page breathes, how a layout holds up on a cracked phone screen on a slow network.
            </p>
          </div>

          <aside className="about-card nm reveal" style={{ '--d': '0.15s' }} aria-label="What I do">
            <div className="about-monogram" aria-hidden="true">
              <span className="display emboss">BA</span>
            </div>

            <ul className="about-facts">
              {disciplines.map(({ title, detail, Icon }) => (
                <li key={title}>
                  <Icon size={18} />
                  <span className="about-discipline">
                    <strong>{title}</strong>
                    <span className="mono">{detail}</span>
                  </span>
                </li>
              ))}
              <li>
                <PenLine size={18} />
                <span className="about-discipline">
                  <strong>Writing</strong>
                  <a href={profile.blog} target="_blank" rel="noopener noreferrer" className="mono">
                    Bimme&apos;s Space <ArrowUpRight size={12} />
                  </a>
                </span>
              </li>
            </ul>

            <div className="about-socials">
              {profile.socials.slice(0, 3).map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="nm-btn">
                  {s.label} <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
