import React from 'react';
import Link from 'next/link';
import { Briefcase } from 'lucide-react';
import './Portfolio.css';
import { useTheme } from '../context/ThemeContext';

const Portfolio = () => {
  const { isDark } = useTheme();

  const portfolioData = {
    personal: [
      {
        id: 1,
        title: "DANIHF Foundation",
        image: "/images/danihf.png",
        description: "Humanitarian foundation website with impact tracking and project management"
      },
      {
        id: 2,
        title: "CAPVETS Ordering",
        image: "/images/Ordering_System.png",
        description: "Farm-fresh food ordering platform with direct-to-consumer sales"
      },
      {
        id: 3,
        title: "CAPVETS Company",
        image: "/images/CAPVETS.png",
        description: "Agricultural services company website with consultation booking"
      }
    ],
    collaborative: []
  };

  return (
    <section id="portfolio" className={`portfolio ${isDark ? 'dark-theme' : ''}`}>
      <div className="container">
        <div className="section-heading">
          <h2>Portfolio <Briefcase size={24} className="icon" /></h2>
        </div>

        <div className="portfolio-content">
          <div className="category-section">
            <h3>Personal Projects</h3>
            <div className="portfolio-grid">
              {portfolioData.personal.map((project) => (
                <div key={project.id} className="portfolio-item">
                  <div className="portfolio-image">
                    <img src={project.image} alt={project.title} />
                    <div className="portfolio-overlay">
                      <div className="portfolio-info">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <Link
                          href={`/project/${project.id}`}
                          className="portfolio-link"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;