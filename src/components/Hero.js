'use client';

import React, { useEffect, useRef, useState } from 'react';
import ProjectShatter from './ProjectShatter';
import { projects } from '../data/projects';
import './Hero.css';

const TAU = Math.PI * 2;
const N = 72; // blob resolution
const R0 = 188; // blob rest radius in viewBox units (viewBox is 600 wide)
const FIRST = 'Bimme';
const SECOND = 'Audrey';
const RING_TEXT = 'Click to break it open ✦ Scroll to rotate ✦ Come closer ✦ ';

// Catmull-Rom through a closed loop of points, emitted as cubic Béziers.
function closedPath(pts) {
  const n = pts.length;
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    d +=
      `C${(p1[0] + (p2[0] - p0[0]) / 6).toFixed(1)},${(p1[1] + (p2[1] - p0[1]) / 6).toFixed(1)} ` +
      `${(p2[0] - (p3[0] - p1[0]) / 6).toFixed(1)},${(p2[1] - (p3[1] - p1[1]) / 6).toFixed(1)} ` +
      `${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d + 'Z';
}

// Asymmetric spring: snappy when being pulled, slow and wobbly when released.
function spring(s, target, grabbing) {
  const k = grabbing ? 0.08 : 0.016;
  const damp = grabbing ? 0.76 : 0.9;
  s.v = (s.v + (target - s.x) * k) * damp;
  s.x += s.v;
}

const wrapAngle = (a) => Math.atan2(Math.sin(a), Math.cos(a));
const newSpring = () => ({ x: 0, v: 0 });

export default function Hero() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const pathRef = useRef(null);
  const nameRef = useRef(null);
  const ringsRef = useRef(null);
  const textRingRef = useRef(null);
  const moonRef = useRef(null);
  const glowRef = useRef(null);
  const letterRefs = useRef([]);
  const objectRef = useRef(null);

  const [origin, setOrigin] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const path = pathRef.current;
    const name = nameRef.current;
    const rings = ringsRef.current;
    const textRing = textRingRef.current;
    const moon = moonRef.current;
    const glow = glowRef.current;
    if (!section || !stage || !path || !name || !rings || !textRing || !moon || !glow) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const pts = Array.from({ length: N }, () => ({ r: newSpring(), t: newSpring() }));
    const letters = letterRefs.current.filter(Boolean).map((el) => ({
      el,
      cx: 0,
      cy: 0,
      x: newSpring(),
      y: newSpring(),
      rot: newSpring(),
    }));
    const client = { x: -1e5, y: -1e5 };
    const out = new Array(N);
    let pxPerUnit = 1;
    let rot = 0;
    let visible = true;
    let raf = 0;
    const t0 = performance.now();

    const measure = () => {
      pxPerUnit = stage.offsetWidth / 600;
      const w = name.offsetWidth;
      const h = name.offsetHeight;
      letters.forEach((l) => {
        const line = l.el.offsetParent === name ? null : l.el.offsetParent;
        const ox = line ? line.offsetLeft : 0;
        const oy = line ? line.offsetTop : 0;
        l.cx = ox + l.el.offsetLeft + l.el.offsetWidth / 2 - w / 2;
        l.cy = oy + l.el.offsetTop + l.el.offsetHeight / 2 - h / 2;
      });
    };

    const progress = () => {
      const total = section.offsetHeight - window.innerHeight;
      if (total <= 0) return 0;
      return Math.min(1, Math.max(0, -section.getBoundingClientRect().top / total));
    };

    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      const t = (now - t0) / 1000;

      // Scroll → rotation (eased so wheel steps don't jitter)
      const p = progress();
      const rotTarget = p * Math.PI * 1.6;
      rot += (rotTarget - rot) * 0.08;
      section.style.setProperty('--p', p.toFixed(4));

      // Pointer in stage-local px (undoing the scroll-driven scale on the stage)
      const rect = stage.getBoundingClientRect();
      const s = rect.width / stage.offsetWidth || 1;
      const px = (client.x - (rect.left + rect.width / 2)) / s;
      const py = (client.y - (rect.top + rect.height / 2)) / s;
      const ux = px / pxPerUnit;
      const uy = py / pxPerUnit;
      const cr = Math.hypot(ux, uy);
      const ca = Math.atan2(uy, ux);
      const reach = 260; // how far away the blob starts to notice you (units)

      // Blob: each point stretches toward the pointer (outside) or bulges (inside)
      for (let i = 0; i < N; i++) {
        const a = (i / N) * TAU;
        const aw = a - rot;
        const rest =
          R0 *
          (1 +
            0.055 * Math.sin(3 * aw + t * 0.6) +
            0.035 * Math.sin(5 * aw - t * 0.45) +
            0.02 * Math.sin(2 * aw + t * 0.3));

        let tr = 0;
        let tt = 0;
        if (!reduce) {
          const diff = wrapAngle(ca - a);
          const w = Math.exp(-(diff * diff) / 0.28);
          const gap = cr - rest;
          if (gap > 0) {
            const g = Math.exp(-(gap * gap) / (reach * reach));
            tr = w * g * Math.min(gap, 150) * 0.62;
            tt = Math.sign(diff) * w * g * 22;
          } else {
            tr = w * 30 * (cr / rest);
          }
        }

        const P = pts[i];
        spring(P.r, tr, Math.abs(tr) > Math.abs(P.r.x));
        spring(P.t, tt, Math.abs(tt) > Math.abs(P.t.x));
        const r = rest + P.r.x;
        const ang = a + P.t.x / R0;
        out[i] = [Math.cos(ang) * r, Math.sin(ang) * r];
      }
      path.setAttribute('d', closedPath(out));

      // Letters lean and drift toward the pointer, then wobble back
      const lrange = stage.offsetWidth * 0.26;
      for (const l of letters) {
        const lx = px - l.cx;
        const ly = py - l.cy;
        const d = Math.hypot(lx, ly) || 1;
        const inf = reduce ? 0 : Math.exp(-(d * d) / (lrange * lrange));
        const pull = Math.min(d, lrange) * 0.32 * inf;
        const tx = (lx / d) * pull;
        const ty = (ly / d) * pull;
        const tRot = (lx / lrange) * 16 * inf;
        const grab = tx * tx + ty * ty > l.x.x * l.x.x + l.y.x * l.y.x;
        spring(l.x, tx, grab);
        spring(l.y, ty, grab);
        spring(l.rot, tRot, grab);
        l.el.style.transform = `translate(${l.x.x.toFixed(2)}px, ${l.y.x.toFixed(2)}px) rotate(${l.rot.x.toFixed(2)}deg) skewX(${(-l.rot.x * 0.7).toFixed(2)}deg)`;
      }

      // Orbiting parts
      const deg = (rot * 180) / Math.PI;
      rings.style.transform = `rotate(${deg.toFixed(2)}deg)`;
      textRing.style.transform = `rotate(${(-deg * 0.6 + t * 4).toFixed(2)}deg)`;
      const ma = rot * 1.4 + t * 0.25;
      moon.setAttribute('cx', (Math.cos(ma) * 252).toFixed(1));
      moon.setAttribute('cy', (Math.sin(ma) * 252).toFixed(1));

      // Accent glow wakes up as you approach
      const prox = reduce ? 0.3 : Math.min(1, Math.max(0, 1 - (cr - R0) / 320));
      const gx = Math.cos(ca) * Math.min(cr, 120) * prox * pxPerUnit * 0.5;
      const gy = Math.sin(ca) * Math.min(cr, 120) * prox * pxPerUnit * 0.5;
      glow.style.transform = `translate(${gx.toFixed(1)}px, ${gy.toFixed(1)}px)`;
      glow.style.opacity = (0.18 + prox * 0.62).toFixed(3);
    };

    const onMove = (e) => {
      client.x = e.clientX;
      client.y = e.clientY;
    };
    const onLeave = () => {
      client.x = client.y = -1e5;
    };
    const onUp = (e) => {
      if (e.pointerType !== 'mouse') onLeave();
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);

    const ro = new ResizeObserver(measure);
    ro.observe(stage);
    document.fonts?.ready.then(measure);
    measure();

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(section);

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  const breakApart = () => {
    const stage = stageRef.current;
    const rect = stage.getBoundingClientRect();
    setOrigin({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      r: (rect.width / 600) * R0,
    });
  };

  const reassemble = () => {
    setOrigin(null);
    objectRef.current?.focus({ preventScroll: true });
  };

  let letterIndex = 0;
  const renderLetters = (word) =>
    word.split('').map((ch) => {
      const i = letterIndex++;
      return (
        <span key={i} className="hero-letter" ref={(el) => {
            letterRefs.current[i] = el;
          }}
        >
          {ch}
        </span>
      );
    });

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <div className="hero-sticky">
        <h1 className="sr-only">Bimme Audrey Zun — Frontend Web Developer</h1>

        <div className="hero-meta hero-meta--tl mono">
          <span>Frontend developer</span>
          <span className="hero-meta-sub">Yaoundé, Cameroon</span>
        </div>
        <div className="hero-meta hero-meta--tr mono">
          <span>Portfolio ©{new Date().getFullYear()}</span>
          <span className="hero-meta-sub">{String(projects.length).padStart(2, '0')} selected works inside</span>
        </div>
        <div className="hero-meta hero-meta--bl mono">
          <span className="hero-status">
            <i aria-hidden="true" /> Open to new projects
          </span>
        </div>
        <div className="hero-meta hero-meta--br mono" aria-hidden="true">
          <span>Scroll</span>
          <span className="hero-scroll-line" />
        </div>

        <div className={`hero-stage ${origin ? 'is-broken' : ''}`} ref={stageRef}>
          <div className="hero-glow" ref={glowRef} aria-hidden="true" />

          <svg className="hero-rings" viewBox="-300 -300 600 600" aria-hidden="true">
            <g ref={ringsRef}>
              <circle r="252" className="ring ring--dash" />
              <circle r="232" className="ring ring--fine" />
              <circle ref={moonRef} r="9" className="moon" cx="252" cy="0" />
            </g>
            <defs>
              <path id="ring-text-path" d="M0,-278 a278,278 0 1,1 0,556 a278,278 0 1,1 0,-556" />
            </defs>
            <g ref={textRingRef}>
              <text className="ring-text">
                <textPath href="#ring-text-path" textLength={TAU * 278 - 4} lengthAdjust="spacing">
                  {RING_TEXT.repeat(3)}
                </textPath>
              </text>
            </g>
          </svg>

          <button
            type="button"
            className="hero-object"
            ref={objectRef}
            onClick={breakApart}
            aria-label="Break the object open to reveal my projects"
            aria-haspopup="dialog"
          >
            <span className="hero-body">
              <svg className="hero-blob" viewBox="-300 -300 600 600" aria-hidden="true">
                <defs>
                  <linearGradient id="blob-fill" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" className="blob-stop-hi" />
                    <stop offset="1" className="blob-stop-lo" />
                  </linearGradient>
                </defs>
                <path ref={pathRef} className="blob-path" fill="url(#blob-fill)" />
              </svg>

              <span className="hero-name" ref={nameRef} aria-hidden="true">
                <span className="hero-line hero-line--first display">{renderLetters(FIRST)}</span>
                <span className="hero-line hero-line--second mono">{renderLetters(SECOND)}</span>
              </span>
            </span>
          </button>
        </div>

        <p className="hero-tagline">
          I build <em>soft, tactile</em> interfaces with React &amp; Next.js ~ responsive digital interfaces that feel as good as they look.
        </p>
      </div>

      {origin && <ProjectShatter origin={origin} onClose={reassemble} />}
    </section>
  );
}
