'use client';

import React, { useState } from 'react';
import { Mail, Phone, BookOpen, Linkedin, Twitter, Send } from 'lucide-react';
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
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus({
        type: 'success',
        message: data.message
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        type: 'error',
        message: error.message || 'Oops! Something went wrong. Please try again or contact me directly via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`contact ${isDark ? 'dark-theme' : ''}`}>
      <div className="container">
        <div className="section-heading">
          <h2>Contact Me <Mail size={24} className="icon" /></h2>
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  {status.message && (
                    <div className={`form-status ${status.type}`}>
                      {status.message}
                    </div>
                  )}

                  <div className="form-group">
                    <button
                      type="submit"
                      className="submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Submit
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="contact-info-section">
              <div className="contact-info">
                <div className="contact-header">
                  <h3>Bimme Audrey Z.</h3>
                  <p>Frontend - Web Developer</p>
                </div>

                <div className="contact-details">
                  <div className="contact-item">
                    <Phone size={20} className="contact-icon" />
                    <div>
                      <h4>Phone</h4>
                      <p>+237-673-795-727</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <Mail size={20} className="contact-icon" />
                    <div>
                      <h4>Email</h4>
                      <p>bimmedev@gmail.com</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <BookOpen size={20} className="contact-icon" />
                    <div>
                      <h4>Blog</h4>
                      <p>
                        <a href="https://bimme.hashnode.dev" target="_blank" rel="noopener noreferrer">
                          Bimme's Space
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="social-links">
                  <h4>Connect with me</h4>
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/bimme-audrey" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={24} />
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/small_bimme?t=O9jMSfusQDDx2rIYRVVbFQ&s=09" target="_blank" rel="noopener noreferrer">
                        <Twitter size={24} />
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