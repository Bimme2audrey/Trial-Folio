import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';
import './Portfolio.css';
import { useTheme } from '../context/ThemeContext';

const Portfolio = () => {
  const { isDark } = useTheme();

  const portfolioData = {
    webDev: [
      {
        id: 1,
        title: "Portfolio Project",
        image: "/images/portfolio.jpg", 
        description: "Personal portfolio website built with React"
      },
      {
        id: 2,
        title: "Recipe Project",
        image: "/images/report-dashboard.jpg",
        description: "Recipe management system"
      },
       {
        id: 6,
        title: "Company Official Website",
        image: "/images/Anexiums.png",
        description: "Official website for Anexiums "
      }
    ],
    uiUx: [
      {
        id: 3,
        title: "Web App Design",
        image: "/images/order.png",
        description: "Modern chicken ordering web app UI/UX design with user-centric approach"
      },
      {
        id: 4,
        title: "Kids Learning Platform",
        image: "/images/kiddy.png",
        description: "Kids learning platform design focusing on conversion optimization"
      },
      {
        id: 5,
        title: "Login Form Design",
        image: "/images/Editor.png",
        description: "Login Form paying attention to details and user experience"
      }
    ]
  };

  return (
    <section id="portfolio" className={`portfolio ${isDark ? 'dark-theme' : ''}`}>
      <div className="container">
        <div className="section-heading">
          <Briefcase size={40} className="section-icon" />
          <h2>Portfolio</h2>
        </div>
        
        <div className="portfolio-content">
          <div className="category-section">
            <h3>Web Development</h3>
            <div className="portfolio-grid">
              {portfolioData.webDev.map((project) => (
                <div key={project.id} className="portfolio-item">
                  <div className="portfolio-image">
                    <img src={project.image} alt={project.title} />
                    <div className="portfolio-overlay">
                      <div className="portfolio-info">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <Link 
                          to={`/project/${project.id}`}
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

          <div className="category-section">
            <h3>UI/UX Design</h3>
            <div className="portfolio-grid">
              {portfolioData.uiUx.map((project) => (
                <div key={project.id} className="portfolio-item">
                  <div className="portfolio-image">
                    <img src={project.image} alt={project.title} />
                    <div className="portfolio-overlay">
                      <div className="portfolio-info">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <Link 
                          to={`/project/${project.id}`}
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