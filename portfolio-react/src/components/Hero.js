import React from 'react';
import './Hero.css';
import ScrollAnimation from './ScrollAnimation';

const Hero = () => {
  return (
    <section id="welcome-hero" className="welcome-hero">
      <div className="container">
        <div className="hero-content">
          <ScrollAnimation animation="fadeInUp" delay={0.2}>
            <div className="hero-text">
              <h1>
                hi 👋 <span>,</span> I am <br /> 
                <span className="highlight">Bimme</span> <br /> 
                <span className="highlight">Audrey</span> <span>.</span>
              </h1>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fadeInUp" delay={0.4}>
            <p className="hero-subtitle">
              Junior Frontend - Web Developer 👩‍💻
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fadeInUp" delay={0.6}>
            <div className="hero-buttons">
              <a href="#about" className="btn btn-primary">Learn More</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
