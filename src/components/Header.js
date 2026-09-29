'use client';

import React, { useEffect, useRef, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

// base: prefix for section links, so the same nav works from /project/[id] ('/' → '/#about')
const Header = ({ base = '' }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState('');
  const dialRef = useRef(null);

  // Track which section is in view so the pill can say where you are.
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setCurrent(e.target.id);
        });
        if (window.scrollY < window.innerHeight * 0.5) setCurrent('');
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close on outside click / Escape
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (!dialRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const currentLabel = SECTIONS.find((s) => s.id === current)?.label;

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className={`nav-dial ${open ? 'is-open' : ''}`} ref={dialRef}>
        <button
          type="button"
          className="nm-btn nav-name"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="nav-knob" aria-hidden="true" />
          <span className="nav-word display">
            Bimme<span className="nav-dot">.</span>
          </span>
          <span className="nav-where mono" aria-live="polite">
            {currentLabel ? `/ ${currentLabel}` : '/ menu'}
          </span>
        </button>

        <nav id="nav-links" className="nav-links" aria-label="Sections" inert={!open}>
          {SECTIONS.map((s, i) => (
            <a
              key={s.id}
              href={`${base}#${s.id}`}
              className={`nav-chip ${current === s.id ? 'is-current' : ''}`}
              style={{ '--i': i }}
              onClick={() => setOpen(false)}
            >
              <span className="mono nav-chip-num">{String(i + 1).padStart(2, '0')}</span>
              {s.label}
            </a>
          ))}
        </nav>
      </div>

      <ThemeToggle />
    </header>
  );
};

export default Header;
