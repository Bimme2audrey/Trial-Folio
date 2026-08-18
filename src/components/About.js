import React from 'react';
import './About.css';
import ScrollAnimation from './ScrollAnimation';
import {Camera, Image, Phone, Mail, BookOpen, Linkedin, Github } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <ScrollAnimation animation="fadeInUp" delay={0.2}>
          <div className="section-heading">
            <h2>About Me <Camera size={24} className="icon" /></h2>
          </div>
        </ScrollAnimation>
        
        <div className="about-content">
          <div className="row">
            <ScrollAnimation animation="fadeInLeft" delay={0.3}>
              <div className="col-left">
                <div className="about-text">
                  <h3>
                    I am Bimme Audrey Zun, a Frontend Web Developer based in Yaounde, Cameroon.
                  </h3>
                  <p>
                    I build responsive, user-focused interfaces with React and Next.js, turning design ideas into polished web experiences that feel intuitive, modern, and conversion-ready.
                  </p>
                  
                  <div className="contact-info">
                    <div className="info-item">
                      <h4><Phone className="icon" /> Phone</h4>
                      <p>+237-673-795-727</p>
                    </div>
                    <div className="info-item">
                      <h4><Mail className="icon" /> Email</h4>
                      <p>audreybimme@gmail.com</p>
                    </div>
                    <div className="info-item">
                      <h4><BookOpen className="icon" /> Blog</h4>
                      <p>
                        <a href="https://bimme.hashnode.dev" target="_blank" rel="noopener noreferrer">
                          Bimme's Space
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInRight" delay={0.4}>
              <div className="col-right">
                <div className="about-image">
                  <div className="image-placeholder">
                    <p><Image size={24} className="icon" /> Loading</p>
                  </div>
                  
                  <div className="social-links">
                    <ul>
                      <li>
                        <a href="https://www.linkedin.com/in/bimme-audrey" target="_blank" rel="noopener noreferrer">
                          <Linkedin size={24} className="icon" />
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/Bimme2audrey" target="_blank" rel="noopener noreferrer">
                          <Github size={24} className="icon" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
