import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Contact.css';

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className={`contact ${isDark ? 'dark-theme' : ''}`}>
      <div className="container">
        <div className="section-heading">
          <h2>Contact Me 📧</h2>
        </div>
        
        <div className="contact-content">
          <div className="contact-row">
            <div className="contact-form-section">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name*"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email*"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                    />
                  </div>
                  
                  <div className="form-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      rows="8"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="form-group">
                    <button type="submit" className="submit-btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="contact-info-section">
              <div className="contact-info">
                <div className="contact-header">
                  <h3>Bimme Audrey Z.</h3>
                  <p>Aspiring Frontend - Web Developer</p>
                </div>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <h4>Phone</h4>
                    <p>+237-673-795-727</p>
                  </div>
                  <div className="contact-item">
                    <h4>Email</h4>
                    <p>bimmedev@gmail.com</p>
                  </div>
                  <div className="contact-item">
                    <h4>Blog</h4>
                    <p>
                      <a href="https://bimme.hashnode.dev" target="_blank" rel="noopener noreferrer">
                        Bimme's Space
                      </a>
                    </p>
                  </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
