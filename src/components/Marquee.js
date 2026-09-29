import React from 'react';
import './Marquee.css';

const WORDS = ['React', 'Next.js', 'Interfaces', 'Motion', 'Responsive', 'JavaScript', 'Soft UI', 'Accessible'];

const Marquee = () => {
  const row = WORDS.map((w) => (
    <span key={w} className="marquee-word display">
      {w}
      <i aria-hidden="true">✦</i>
    </span>
  ));
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-row">{row}</div>
        <div className="marquee-row">{row}</div>
      </div>
    </div>
  );
};

export default Marquee;
