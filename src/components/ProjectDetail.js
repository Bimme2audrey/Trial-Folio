import React from 'react';
import { ArrowLeft, ExternalLink, Figma, Github, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useRouter } from 'next/navigation';
import './ProjectDetail.css';

const ProjectDetail = ({ projectId }) => {
  const { isDark } = useTheme();
  const router = useRouter();
  const id = projectId;

  const projectsData = {
    1: {
      title: 'DANIHF Foundation',
      category: 'Non-profit Website',
      image: '/images/danihf.png',
      description: 'Humanitarian foundation website with impact tracking and project management.',
      fullDescription: 'A powerful humanitarian website designed to raise trust, highlight community impact, and guide visitors toward meaningful engagement. It combines storytelling, measurable outcomes, and clear calls to action to support a mission-driven organization.',
      technologies: ['React', 'Next.js', 'JavaScript', 'CSS3', 'Responsive Design'],
      features: [
        'Multi-section storytelling for mission and impact',
        'Impact stats and campaign highlights',
        'Project showcase and gallery layout',
        'Volunteer and contact engagement paths',
        'Mobile-first accessible experience'
      ],
      challenges: 'The site needed to balance emotional storytelling with credibility and clarity, especially when presenting complex humanitarian work to diverse audiences across devices.',
      links: {
        live: 'https://danihf.org',
        github: null,
        figma: null
      },
      images: ['/images/danihf.png'],
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      initials: 'DF'
    },
    2: {
      title: 'CAPVETS Ordering',
      category: 'E-commerce Experience',
      image: '/images/Ordering_System.png',
      description: 'Farm-fresh food ordering platform with direct-to-consumer flow and strong UX.',
      fullDescription: 'This ordering experience was designed to simplify the buying journey for fresh agricultural products, reducing friction while creating a more premium shopping feel. The interface emphasizes clarity, trust, and a quick path to conversion.',
      technologies: ['React', 'Next.js', 'JavaScript', 'CSS3', 'UI Systems'],
      features: [
        'Product-focused visual merchandising',
        'Simplified cart and checkout flow',
        'Conversion-oriented layout and hierarchy',
        'Responsive ordering experience',
        'Clear product presentation for freshness and trust'
      ],
      challenges: 'The biggest challenge was turning a complex ordering flow into something intuitive and reassuring for users who want to shop quickly without losing confidence in product quality.',
      links: {
        live: 'https://ordering.capvets.com',
        github: null,
        figma: null
      },
      images: ['/images/Ordering_System.png'],
      gradient: 'linear-gradient(135deg, #14b8a6 0%, #0ea5e9 100%)',
      initials: 'CO'
    },
    3: {
      title: 'CAPVETS Company',
      category: 'Business Website',
      image: '/images/CAPVETS.png',
      description: 'Agricultural services company website with consultation booking and trust-building content.',
      fullDescription: 'A brand-forward business website built to help a company present its value clearly across livestock, crop, and veterinary services. The experience guides visitors toward service discovery and direct inquiries with a professional, modern design.',
      technologies: ['React', 'Next.js', 'JavaScript', 'CSS3', 'Lead Generation'],
      features: [
        'Professional service positioning',
        'Consultation and contact funnels',
        'Client trust and testimonial sections',
        'Service discovery and industry storytelling',
        'SEO-friendly structure'
      ],
      challenges: 'The goal was to communicate technical agricultural expertise in a way that felt approachable, credible, and conversion-ready for potential clients and partners.',
      links: {
        live: 'https://capvets.com',
        github: null,
        figma: null
      },
      images: ['/images/CAPVETS.png'],
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
      initials: 'CC'
    },
    4: {
      title: 'CJ Visuals Productions',
      category: 'Creative Studio',
      image: null,
      description: 'A cinematic creative brand website focused on premium visuals, storytelling, and strong conversion for service inquiries.',
      fullDescription: 'This website builds an elevated visual identity for a production company, using a cinematic aesthetic and polished messaging strategy to attract clients who value premium creative work. The layout emphasizes storytelling, confidence, and clear inquiry conversion.',
      technologies: ['Next.js', 'Brand Design', 'Creative UX', 'Responsive Layout'],
      features: [
        'Cinematic brand storytelling',
        'Service-focused conversion structure',
        'High-impact visual pacing',
        'Lead generation for creative inquiries',
        'Elegant mobile experience'
      ],
      challenges: 'The challenge was balancing a premium creative feel with functional clarity so visitors immediately understand what the studio offers and how to contact them.',
      links: {
        live: 'https://www.cjvisualsproductions.com/',
        github: null,
        figma: null
      },
      images: [],
      gradient: 'linear-gradient(135deg, #f43f5e 0%, #8b5cf6 100%)',
      initials: 'CJ'
    },
    5: {
      title: 'Anexiums',
      category: 'Business Website',
      image: null,
      description: 'A polished digital presence designed to elevate a modern business brand with clarity, trust, and confidence-building content.',
      fullDescription: 'Anexiums needed a cleaner and more premium online presence that instantaneously communicated professionalism and credibility. The result is a streamlined experience built around clarity, trust, and business-focused user flow.',
      technologies: ['Next.js', 'UX Strategy', 'Responsive Design', 'Brand Positioning'],
      features: [
        'Professional business storytelling',
        'Trust-building content layout',
        'Modern conversion-focused structure',
        'Clear service communication',
        'Responsive, premium presentation'
      ],
      challenges: 'The key challenge was helping the brand feel established, modern, and credible without overwhelming the visitor with too much complexity or clutter.',
      links: {
        live: 'https://anexiums.com/',
        github: null,
        figma: null
      },
      images: [],
      gradient: 'linear-gradient(135deg, #0f172a 0%, #475569 100%)',
      initials: 'AN'
    }
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

        <div
          className={`project-image-main ${!project.image ? 'project-gradient-cover' : ''}`}
          style={!project.image ? { background: project.gradient } : undefined}
        >
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <div className="project-hero-mark">
              <span>{project.initials}</span>
            </div>
          )}
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
