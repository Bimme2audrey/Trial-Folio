import React from 'react';
import { ArrowUpRight, Mail, MapPin, Phone, PenLine } from 'lucide-react';
import { profile } from '../data/projects';
import './About.css';

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

          <aside className="about-card nm reveal" style={{ '--d': '0.15s' }} aria-label="Contact details">
            <div className="about-monogram" aria-hidden="true">
              <span className="display emboss">BA</span>
            </div>

            <ul className="about-facts">
              <li>
                <MapPin size={18} />
                <span className="mono">Based in</span>
                <span>{profile.location}</span>
              </li>
              <li>
                <Mail size={18} />
                <span className="mono">Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <Phone size={18} />
                <span className="mono">Phone</span>
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
              </li>
              <li>
                <PenLine size={18} />
                <span className="mono">Writing</span>
                <a href={profile.blog} target="_blank" rel="noopener noreferrer">
                  Bimme&apos;s Space
                </a>
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
