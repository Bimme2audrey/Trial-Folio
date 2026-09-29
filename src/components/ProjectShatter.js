'use client';

import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { ArrowUpRight, X } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectLogo from './ProjectLogo';
import './ProjectShatter.css';

const TAU = Math.PI * 2;
const SHARDS = 22;
const rand = (a, b) => a + Math.random() * (b - a);

// Cards start as jagged fragments and unfold to a (shadow-safe) oversize rectangle.
const FULL_CLIP = 'polygon(-20% -20%, 120% -20%, 120% 120%, -20% 120%)';
const fragmentClip = () =>
  `polygon(${rand(0, 35)}% ${rand(0, 25)}%, ${rand(65, 100)}% ${rand(0, 35)}%, ${rand(60, 100)}% ${rand(65, 100)}%, ${rand(0, 40)}% ${rand(60, 100)}%)`;
const triangleClip = () =>
  `polygon(${rand(0, 100)}% 0%, 100% ${rand(20, 100)}%, ${rand(0, 60)}% 100%)`;

const shards = Array.from({ length: SHARDS }, (_, i) => ({
  size: 14 + ((i * 37) % 46),
  accent: i % 7 === 0,
}));

const offsetToOrigin = (el, origin) => {
  const r = el.getBoundingClientRect();
  return [origin.x - (r.left + r.width / 2), origin.y - (r.top + r.height / 2)];
};

export default function ProjectShatter({ origin, onClose }) {
  const rootRef = useRef(null);
  const closeRef = useRef(null);
  const closingRef = useRef(false);

  const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cards = () => [...rootRef.current.querySelectorAll('.shatter-card')];

  // Burst: runs before paint so the cards never flash in their final spot.
  useLayoutEffect(() => {
    const root = rootRef.current;
    root.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 320, easing: 'ease-out' });
    if (reduceMotion()) return;

    root.querySelectorAll('.shard').forEach((el) => {
      const a = rand(0, TAU);
      const d = rand(origin.r * 0.6, origin.r * 2.8);
      el.style.clipPath = triangleClip();
      el.animate(
        [
          { transform: 'translate(-50%, -50%) rotate(0deg) scale(1)', opacity: 1 },
          {
            transform: `translate(calc(-50% + ${Math.cos(a) * d}px), calc(-50% + ${Math.sin(a) * d}px)) rotate(${rand(-540, 540)}deg) scale(${rand(0.2, 0.7)})`,
            opacity: 0,
          },
        ],
        { duration: rand(700, 1300), easing: 'cubic-bezier(.1,.85,.2,1)', fill: 'forwards' }
      );
    });

    cards().forEach((el, i) => {
      const [dx, dy] = offsetToOrigin(el, origin);
      el.animate(
        [
          { transform: `translate(${dx}px, ${dy}px) rotate(${rand(-60, 60)}deg) scale(0.14)`, clipPath: fragmentClip() },
          { transform: 'none', clipPath: FULL_CLIP },
        ],
        { duration: 1150, delay: 80 + i * 75, easing: 'cubic-bezier(.2,1.2,.35,1)', fill: 'backwards' }
      );
    });
  }, [origin]);

  const close = async () => {
    if (closingRef.current) return;
    closingRef.current = true;
    const root = rootRef.current;
    const running = [];
    if (!reduceMotion()) {
      const list = cards();
      list.forEach((el, i) => {
        const [dx, dy] = offsetToOrigin(el, origin);
        running.push(
          el.animate(
            [
              { transform: 'none', opacity: 1 },
              { transform: `translate(${dx}px, ${dy}px) rotate(${rand(-40, 40)}deg) scale(0.1)`, opacity: 0 },
            ],
            { duration: 480, delay: (list.length - 1 - i) * 45, easing: 'cubic-bezier(.7,0,.84,0)', fill: 'forwards' }
          ).finished
        );
      });
    }
    running.push(
      root.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 280, delay: reduceMotion() ? 0 : 420, fill: 'forwards' })
        .finished
    );
    await Promise.all(running);
    onClose();
  };

  // Scroll lock, Escape to close, focus into the dialog
  useEffect(() => {
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus({ preventScroll: true });
    const onKey = (e) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onBackdrop = (e) => {
    if (!e.target.closest('.shatter-card, .shatter-close')) close();
  };

  return createPortal(
    <div
      className="shatter"
      ref={rootRef}
      role="dialog"
      aria-modal="true"
      aria-label="Selected projects"
      onClick={onBackdrop}
    >
      <div className="shatter-shards" aria-hidden="true">
        {shards.map((s, i) => (
          <span
            key={i}
            className={`shard ${s.accent ? 'shard--accent' : ''}`}
            style={{ left: origin.x, top: origin.y, width: s.size, height: s.size }}
          />
        ))}
      </div>

      <div className="shatter-inner container">
        <header className="shatter-head">
          <p className="mono">
            <span className="shatter-count">{String(projects.length).padStart(2, '0')}</span> fragments / selected work
          </p>
          <button type="button" className="nm-btn shatter-close" ref={closeRef} onClick={close}>
            <X size={18} /> Reassemble
          </button>
        </header>

        <div className="shatter-grid">
          {projects.map((p, i) => (
            <Link key={p.id} href={`/project/${p.id}`} className="shatter-card nm">
              <ProjectLogo project={p} className="shatter-visual" />
              <div className="shatter-body">
                <span className="mono shatter-meta">
                  {String(i + 1).padStart(2, '0')} — {p.category}
                </span>
                <h3 className="display">{p.title}</h3>
                <p>{p.description}</p>
                <span className="shatter-go">
                  Open case <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="shatter-hint mono">Click empty space or press Esc to put it back together</p>
      </div>
    </div>,
    document.body
  );
}
