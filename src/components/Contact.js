'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
import { profile } from '../data/projects';
import './Contact.css';

const EMPTY = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const [formData, setFormData] = useState(EMPTY);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || 'Something went wrong');

      setStatus({ type: 'success', message: data.message });
      setFormData(EMPTY);
    } catch (error) {
      setStatus({
        type: 'error',
        message: `${error.message}. You can also email me directly at ${profile.email}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head">
          <span className="section-index mono">05 — Contact</span>
          <h2 className="section-title display reveal">
            Let&apos;s make
            <br />
            something <span className="contact-soft">soft</span>
            <span style={{ color: 'var(--accent)' }}>.</span>
          </h2>
        </div>

        <div className="contact-grid">
          <div className="contact-side reveal">
            <p className="contact-lede">
              Have a project, a role, or just an idea that needs a home on the web? My inbox is open.
            </p>
            <a href={`mailto:${profile.email}`} className="contact-mail display">
              {profile.email}
              <ArrowUpRight size={28} />
            </a>
            <ul className="contact-socials">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="nm-btn">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form className="contact-form nm reveal" style={{ '--d': '0.12s' }} onSubmit={handleSubmit}>
            <div className="form-row">
              <label className="field">
                <span className="mono">Name*</span>
                <input name="name" value={formData.name} onChange={handleChange} required disabled={isSubmitting} autoComplete="name" />
              </label>
              <label className="field">
                <span className="mono">Email*</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  autoComplete="email"
                />
              </label>
            </div>
            <label className="field">
              <span className="mono">Subject</span>
              <input name="subject" value={formData.subject} onChange={handleChange} disabled={isSubmitting} />
            </label>
            <label className="field">
              <span className="mono">Message*</span>
              <textarea name="message" rows={6} value={formData.message} onChange={handleChange} required disabled={isSubmitting} />
            </label>

            {status.message && (
              <p className={`form-status ${status.type}`} role="status">
                {status.message}
              </p>
            )}

            <button type="submit" className="nm-btn nm-btn--accent contact-submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="spinner" aria-hidden="true" /> Sending…
                </>
              ) : (
                <>
                  Send message <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
