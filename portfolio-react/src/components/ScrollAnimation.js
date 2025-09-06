import React, { useEffect, useRef, useState } from 'react';
import './ScrollAnimation.css';

const ScrollAnimation = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  duration = 0.8,
  threshold = 0.1 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`scroll-animation ${animation} ${isVisible ? 'animate' : ''}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
