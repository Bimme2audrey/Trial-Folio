import React from 'react';
import Link from 'next/link';
import { Briefcase, ArrowUpRight } from 'lucide-react';
import './Portfolio.css';
import { useTheme } from '../context/ThemeContext';

const Portfolio = () => {
  const { isDark } = useTheme();

  const portfolioData = {
    personal: [
      {
        id: 1,
        title: 'DANIHF Foundation',
        category: 'Non-profit Website',
        image: null,
        description: 'A modern humanitarian platform built to showcase impact, campaigns, and community initiatives with trust-first storytelling.',
        metric: '3+ impact programs showcased',
        tags: ['Next.js', 'UI Design', 'Responsive'],
        gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
        initials: 'DF'
      },
      {
        id: 2,
        title: 'CAPVETS Ordering',
        category: 'E-commerce Experience',
        image: null,
        description: 'A polished ordering interface for farm-fresh products, focused on conversion, clean UX, and customer trust.',
        metric: 'Streamlined checkout flow',
        tags: ['React', 'Checkout UX', 'Mobile-first'],
        gradient: 'linear-gradient(135deg, #14b8a6 0%, #0ea5e9 100%)',
        initials: 'CO'
      },
      {
        id: 3,
        title: 'CAPVETS Company',
        category: 'Business Website',
        image: null,
        description: 'A professional company site designed to present agricultural services, expertise, and consultation opportunities clearly.',
        metric: 'Service-first brand presentation',
        tags: ['Branding', 'Lead Gen', 'SEO'],
        gradient: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
        initials: 'CC'
      },
      {
        id: 4,
        title: 'CJ Visuals Productions',
        category: 'Creative Studio',
        image: null,
        description: 'A cinematic creative brand website focused on premium visuals, storytelling, and strong conversion for service inquiries.',
        metric: 'Brand experience for visual storytellers',
        tags: ['Branding', 'Creative', 'Conversion'],
        gradient: 'linear-gradient(135deg, #f43f5e 0%, #8b5cf6 100%)',
        initials: 'CJ'
      },
      {
        id: 5,
        title: 'Anexiums',
        category: 'Business Website',
        image: null,
        description: 'A polished digital presence designed to elevate a modern business brand with clarity, trust, and confidence-building content.',
        metric: 'Business-first digital positioning',
        tags: ['UX', 'Strategy', 'Business'],
        gradient: 'linear-gradient(135deg, #0f172a 0%, #475569 100%)',
        initials: 'AN'
      }
    ],
    collaborative: []
  };

  return (
    <section id="portfolio" className={`portfolio ${isDark ? 'dark-theme' : ''}`}>
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Frontend work</p>
          <h2>
            Portfolio
            <Briefcase size={24} className="icon" />
          </h2>
          <p className="section-subtitle">
            I design and build modern front-end experiences with a strong focus on usability,
            interface quality, responsive execution, and conversion-driven UX.
          </p>
        </div>

        <div className="portfolio-stats" aria-label="Portfolio highlights">
          <div className="stat-item">
            <strong>5</strong>
            <span>frontend builds</span>
          </div>
          <div className="stat-item">
            <strong>2+</strong>
            <span>years building</span>
          </div>
          <div className="stat-item">
            <strong>100%</strong>
            <span>responsive UI</span>
          </div>
        </div>

        <div className="portfolio-content">
          <div className="category-section">
            <div className="portfolio-grid">
              {portfolioData.personal.map((project) => (
                <article key={project.id} className="portfolio-item">
                  <div
                    className={`portfolio-image ${!project.image ? 'portfolio-gradient' : ''}`}
                    style={project.image ? undefined : { background: project.gradient }}
                  >
                    {project.image ? (
                      <img src={project.image} alt={project.title} />
                    ) : (
                      <div className="project-initials-wrap">
                        <span className="project-initials">{project.initials}</span>
                      </div>
                    )}
                    <span className="project-badge">{project.category}</span>
                    <div className="portfolio-overlay">
                      <div className="portfolio-info">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <Link href={`/project/${project.id}`} className="portfolio-link">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="portfolio-card-body">
                    <div className="portfolio-tags">
                      {project.tags.map((tag, index) => (
                        <span key={`${project.id}-${tag}-${index}`} className="tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="portfolio-footer">
                      <span>{project.metric}</span>
                      <Link href={`/project/${project.id}`} className="card-link">
                        Explore
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;