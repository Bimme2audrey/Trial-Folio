import React from 'react';
import './About.css';
import ScrollAnimation from './ScrollAnimation';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <ScrollAnimation animation="fadeInUp" delay={0.2}>
          <div className="section-heading">
            <h2>About Me 🌱📸</h2>
          </div>
        </ScrollAnimation>
        
        <div className="about-content">
          <div className="row">
            <ScrollAnimation animation="fadeInLeft" delay={0.3}>
              <div className="col-left">
                <div className="about-text">
                  <h3>
                    I am Bimme Audrey Zun, a Junior Frontend Web Developer, based in Yaounde-Cameroon.
                  </h3>
                  <p>
                    This is a practice project of mine, putting into practice what I've learned for the time being. 
                    Open to learn, so as to grow and improve my skills. Thank you!
                  </p>
                  
                  <div className="contact-info">
                    <div className="info-item">
                      <h4>Phone</h4>
                      <p>+237-673-795-727</p>
                    </div>
                    <div className="info-item">
                      <h4>Email</h4>
                      <p>bimmedev@gmail.com</p>
                    </div>
                    <div className="info-item">
                      <h4>Blog</h4>
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
                    <p>Image Loading 🟣</p>
                  </div>
                  
                  <div className="social-links">
                    <ul>
                      <li>
                        <a href="https://www.linkedin.com/in/bimme-audrey" target="_blank" rel="noopener noreferrer">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/small_bimme?t=O9jMSfusQDDx2rIYRVVbFQ&s=09" target="_blank" rel="noopener noreferrer">
                          <i className="fa fa-twitter"></i>
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
