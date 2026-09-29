'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="mono">© {new Date().getFullYear()} Bimme Audrey Zun</p>
        <p className="mono footer-mid">Designed &amp; built in Yaoundé · Next.js</p>
        <button
          type="button"
          className="nm-btn footer-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
