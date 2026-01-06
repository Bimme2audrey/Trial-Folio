import React, { useEffect, useRef, useState } from 'react';
import './ScrollAnimation.css';

const ScrollAnimation = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Safety: browser-only API
    if (typeof window === 'undefined' || !elementRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observerRef.current?.disconnect(); // stop observing once visible
        }
      },
      { threshold }
    );

    observerRef.current.observe(elementRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={`scroll-animation ${animation} ${isVisible ? 'animate' : ''}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
