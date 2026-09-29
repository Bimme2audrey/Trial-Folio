'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectLogo from './ProjectLogo';
import './Work.css';

const Work = () => {
  const [hovered, setHovered] = useState(-1);
  const previewRef = useRef(null);

  // Floating preview trails the pointer with a little lag (desktop pointers only)
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const el = previewRef.current;
    const target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    let raf = 0;
    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    const tick = () => {
      pos.x += (target.x - pos.x) * 0.14;
      pos.y += (target.y - pos.y) * 0.14;
      const tilt = Math.max(-12, Math.min(12, (target.x - pos.x) * 0.08));
      el.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%) rotate(${tilt}deg)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="section-head">
          <span className="section-index mono">02 — Selected work</span>
          <h2 className="section-title display reveal">Work</h2>
          <p className="section-lede reveal" style={{ '--d': '0.1s' }}>
            Interfaces for non-profits, agri-businesses and creative studios — built for clarity, trust and conversion.
            <br />
            <a href="#home" className="work-hint mono">
              ↑ or break the object open
            </a>
          </p>
        </div>

        <ol className="work-list" onPointerLeave={() => setHovered(-1)}>
          {projects.map((p, i) => (
            <li key={p.id} className="work-row reveal" style={{ '--d': `${i * 0.06}s` }}>
              <Link
                href={`/project/${p.id}`}
                className={`work-link ${hovered === i ? 'is-hovered' : ''}`}
                onPointerEnter={() => setHovered(i)}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(-1)}
              >
                <span className="work-num mono">{String(i + 1).padStart(2, '0')}</span>
                <span className="work-title display">{p.title}</span>
                <span className="work-meta">
                  <span className="work-cat">{p.category}</span>
                  <span className="work-tags mono">{p.technologies.slice(0, 3).join(' · ')}</span>
                </span>
                <span className="work-arrow" aria-hidden="true">
                  <ArrowUpRight size={22} />
                </span>
                {p.logo && <ProjectLogo project={p} className="work-thumb" />}
              </Link>
            </li>
          ))}
        </ol>
      </div>

      <div className={`work-preview ${hovered >= 0 ? 'is-visible' : ''}`} ref={previewRef} aria-hidden="true">
        {projects.map((p, i) => (
          <div key={p.id} className={`work-preview-item ${hovered === i ? 'is-active' : ''}`}>
            <ProjectLogo project={p} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
