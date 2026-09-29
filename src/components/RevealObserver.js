'use client';

import { useEffect } from 'react';

// One observer for the whole page: adds .is-in to every .reveal as it scrolls into view.
export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    document.querySelectorAll('.reveal:not(.is-in)').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
