import React from 'react';
import { ArrowLeft, ExternalLink, Github, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useRouter } from 'next/navigation';
import './ProjectDetail.css';

const ProjectDetail = ({ projectId }) => {
  const { isDark } = useTheme();
  const router = useRouter();
  const id = projectId;

  // Extended project data with full details
  const projectsData = {
    1: {
      title: "DANIHF Foundation",
      category: "Web Development",
      image: "/images/danihf.png",
      description: "Humanitarian foundation website with impact tracking and project management",
      fullDescription: "A comprehensive humanitarian foundation website featuring multiple sections including about, impact tracking, projects showcase, gallery, and contact. The site includes testimonials, mission/vision statements, and detailed project information with a focus on community transformation across Cameroon.",
      technologies: ["React", "Next.js", "JavaScript", "CSS3", "Responsive Design"],
      features: [
        "Multi-page navigation with smooth scrolling",
        "Impact tracking and statistics display",
        "Project showcase with detailed descriptions",
        "Testimonials section with client feedback",
        "Gallery for visual content",
        "Contact form and information",
        "Mobile-responsive design"
      ],
      challenges: "Creating a professional and trustworthy online presence for a humanitarian organization while effectively communicating complex impact data and maintaining accessibility across diverse devices.",
      links: {
        live: "https://danihf.org",
        github: null,
        figma: null
      },
      images: ["/images/danihf.png"]
    },
    2: {
      title: "CAPVETS Ordering",
      category: "Web Development",
      image: "/images/capvets-ordering.png",
      description: "Food ordering system with modern UI and seamless checkout",
      fullDescription: "A farm-fresh food ordering platform connecting customers directly with agricultural products. Features product gallery, same-day delivery, and streamlined checkout process. Emphasizes farm-to-table freshness with no middlemen, ensuring better prices and quality for customers.",
      technologies: ["React", "Next.js", "JavaScript", "CSS3", "State Management"],
      features: [
        "Interactive menu navigation",
        "Visual product showcase",
        "Streamlined checkout process",
        "Mobile-first design approach",
        "Order tracking system",
        "Responsive layout"
      ],
      challenges: "Creating an intuitive ordering system that balances visual appeal with functionality while ensuring the process is simple enough for all user demographics.",
      links: {
        live: "https://capvets-ordering.vercel.app",
        github: null,
        figma: null
      },
      images: ["/images/capvets-ordering.png"]
    },
    3: {
      title: "CAPVETS Company",
      category: "Web Development",
      image: "/images/capvets.png",
      description: "Agricultural services company website with consultation booking",
      fullDescription: "Professional agricultural services company website showcasing livestock production, crop cultivation, veterinary care, and agricultural training services. Features comprehensive service descriptions, client testimonials, and consultation booking functionality.",
      technologies: ["React", "Next.js", "JavaScript", "CSS3", "Contact Forms"],
      features: [
        "Service showcase with detailed descriptions",
        "Client testimonials section",
        "Contact and consultation booking",
        "Professional business presentation",
        "Mobile-responsive design",
        "SEO-friendly structure"
      ],
      challenges: "Creating a professional business website that effectively communicates complex agricultural services while maintaining user engagement and trust across diverse stakeholder groups.",
      links: {
        live: "https://capvets.com",
        github: null,
        figma: null
      },
      images: ["/images/capvets.png"]
    },
  };

  const project = projectsData[id];

  if (!project) {
    return (
      <div className={`project-detail ${isDark ? 'dark-theme' : ''}`}>
        <div className="container">
          <p>Project not found</p>
          <button onClick={() => router.push('/#portfolio')} className="back-btn">
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className={`project-detail ${isDark ? 'dark-theme' : ''}`}>
      <div className="container">
        <button onClick={() => router.push('/#portfolio')} className="back-btn">
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
