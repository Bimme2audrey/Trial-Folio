import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Figma, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();

  // Extended project data with full details
  const projectsData = {
    1: {
      title: "Portfolio Project",
      category: "Web Development",
      image: "/images/portfolio.jpg",
      description: "A modern, responsive personal portfolio website built with React, featuring dynamic theme switching, smooth animations, and an intuitive user interface.",
      fullDescription: "This portfolio website showcases my work and skills as a frontend developer. Built with React and modern web technologies, it features a dark/light theme toggle, smooth scrolling navigation, and responsive design that works seamlessly across all devices. The site includes sections for my work experience, projects, and contact information.",
      technologies: ["React", "CSS3", "JavaScript", "React Router", "Context API"],
      features: [
        "Dark/Light theme toggle with Context API",
        "Responsive design for all screen sizes",
        "Smooth scrolling navigation",
        "Dynamic project showcase",
        "Contact form integration"
      ],
      challenges: "Implementing a smooth theme transition across all components while maintaining performance and ensuring accessibility standards.",
      links: {
        live: "https://bimmeaudrey.vercel.app",
        github: null,
        figma: null
      },
      images: ["/images/portfolio.jpg"]
    },
    2: {
      title: "Recipe Project",
      category: "Web Development",
      image: "/images/report-dashboard.jpg",
      description: "A comprehensive recipe management system with search, filtering, and save functionality.",
      fullDescription: "A full-featured recipe management application that allows users to browse, search, and save their favorite recipes. The application includes advanced filtering options, detailed recipe views, and a user-friendly interface for managing personal recipe collections.",
      technologies: ["React", "JavaScript", "CSS3", "REST API"],
      features: [
        "Recipe search and filtering",
        "Detailed recipe views with ingredients and instructions",
        "Save favorite recipes",
        "Responsive card-based layout",
        "Category-based browsing"
      ],
      challenges: "Managing state across multiple components and implementing efficient search and filter algorithms.",
      links: {
        live: "https://bimmesreport.netlify.app",
        github: null,
        figma: null
      },
      images: ["/images/report-dashboard.jpg"]
    },
    3: {
      title: "Web App Design",
      category: "UI/UX Design",
      image: "/images/order.png",
      description: "Modern chicken ordering web app UI/UX design with user-centric approach",
      fullDescription: "A complete UI/UX design for a chicken ordering web application. This project focuses on creating an intuitive ordering flow, from menu browsing to checkout. The design emphasizes food photography, easy navigation, and a streamlined ordering process.",
      technologies: ["Figma", "UI Design", "UX Research", "Prototyping"],
      features: [
        "Intuitive menu navigation",
        "Visual product showcase",
        "Streamlined checkout process",
        "Mobile-first design approach",
        "Interactive prototypes"
      ],
      challenges: "Balancing visual appeal with functionality and ensuring the ordering process is simple enough for all user demographics.",
      links: {
        live: null,
        github: null,
        figma: "https://www.figma.com/design/1AJ740hpKMXEPZpHFecba9/CAPVETS?t=cFYjmor7BRA0zkIJ-0"
      },
      images: ["/images/order.png"]
    },
    4: {
      title: "Kids Learning Platform",
      category: "UI/UX Design",
      image: "/images/kiddy.png",
      description: "Kids learning platform design focusing on conversion optimization",
      fullDescription: "A colorful and engaging learning platform designed specifically for children. The interface uses playful elements, bright colors, and intuitive navigation to create an enjoyable learning experience. The design focuses on keeping young users engaged while making it easy for parents to track progress.",
      technologies: ["Figma", "UI Design", "UX Research", "Child Psychology Principles"],
      features: [
        "Child-friendly interface with large, colorful elements",
        "Gamification elements to encourage learning",
        "Parent dashboard for progress tracking",
        "Age-appropriate content organization",
        "Accessibility features for young learners"
      ],
      challenges: "Creating an interface that appeals to children while meeting educational standards and parental expectations.",
      links: {
        live: null,
        github: null,
        figma: "https://www.figma.com/design/cgTysG7PNw1uYbQCSvDSBV/Kiddify%F0%9F%8C%B8?t=hKZxbRJRKRBmMRVd-0"
      },
      images: ["/images/kiddy.png"]
    },
    5: {
      title: "Login Form Design",
      category: "UI/UX Design",
      image: "/images/Editor.png",
      description: "Login Form paying attention to details and user experience",
      fullDescription: "A meticulously crafted login form design that prioritizes user experience and security. The design includes clear visual feedback, error handling, and a modern aesthetic that builds trust with users.",
      technologies: ["Figma", "UI Design", "Form Design", "Accessibility"],
      features: [
        "Clear visual hierarchy",
        "Inline form validation",
        "Password strength indicator",
        "Social login integration",
        "Responsive design"
      ],
      challenges: "Balancing security requirements with a smooth user experience and ensuring accessibility for all users.",
      links: {
        live: null,
        github: null,
        figma: "https://www.figma.com/design/fkG1Gl5bUFLLQ3SHJuc10D/cAuD?t=SiFStNvSWBYZf1Mh-0"
      },
      images: ["/images/Editor.png"]
    },
    6: {
  title: "Company Official Website",
  category: "Web Development",
  image: "/images/Anexiums.png",
  description: "Official company website with modern UI, dark/light theme, and fully responsive layout.",
  fullDescription: "The official company website was built to represent the brand professionally online. It includes a modern design system, dark and light theme switching, responsive layouts for all devices, and optimized performance. The site focuses on clarity, accessibility, and user engagement.",
  technologies: [
    "React",
    "CSS3",
    "JavaScript",
    "React Router",
    "Context API"
  ],
  features: [
    "Dark & Light theme toggle",
    "Fully responsive design",
    "SEO-friendly structure",
    "Reusable component architecture",
    "Optimized performance and accessibility"
  ],
  challenges: "Maintaining consistent branding across pages while implementing theme switching and ensuring responsiveness on all devices.",
  links: {
    live: "https://anexiums.com",
    github: null,
    figma: null
  },
  images: ["/images/Anexiums.png"]
}
  };

  const project = projectsData[id];

  if (!project) {
    return (
      <div className={`project-detail ${isDark ? 'dark-theme' : ''}`}>
        <div className="container">
          <p>Project not found</p>
          <Link to="/#portfolio" className="back-btn">
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className={`project-detail ${isDark ? 'dark-theme' : ''}`}>
      <div className="container">
        <button onClick={() => navigate('/#portfolio')} className="back-btn">
          <ArrowLeft size={20} />
          Back to Portfolio
        </button>

        <div className="project-header">
          <div className="project-category">{project.category}</div>
          <h1>{project.title}</h1>
          <p className="project-tagline">{project.description}</p>
        </div>

        <div className="project-image-main">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-content">
          <div className="project-main">
            <div className="project-section">
              <h2>About the Project</h2>
              <p>{project.fullDescription}</p>
            </div>

            <div className="project-section">
              <h2>Technologies Used</h2>
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-section">
              <h2>Key Features</h2>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="project-section">
              <h2>Challenges & Solutions</h2>
              <p>{project.challenges}</p>
            </div>
          </div>

          <div className="project-sidebar">
            <div className="project-links-card">
              <h3>Project Links</h3>
              <div className="project-links">
                {project.links.live && (
                  <a 
                    href={project.links.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    <Globe size={20} />
                    View Live Site
                    <ExternalLink size={16} />
                  </a>
                )}
                {project.links.github && (
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    <Github size={20} />
                    View Code
                    <ExternalLink size={16} />
                  </a>
                )}
                {project.links.figma && (
                  <a 
                    href={project.links.figma} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    <Figma size={20} />
                    View Design
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;