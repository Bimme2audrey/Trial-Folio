import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, Figma, Github, Globe } from 'lucide-react';
import { getProject, projects } from '../data/projects';
import Image from 'next/image';
import ProjectLogo from './ProjectLogo';
import Header from './Header';
import './ProjectDetail.css';

interface ProjectDetailProps {
  projectId: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId }) => {
  const project = getProject(projectId);

  if (!project) {
    return (
      <main className="pd pd--missing container">
        <p className="mono">404 — this fragment doesn&apos;t exist</p>
        <Link href="/#work" className="nm-btn">
          <ArrowLeft size={18} /> Back to work
        </Link>
      </main>
    );
  }

  const index = projects.findIndex((p) => p.id === project.id);
  const next = projects[(index + 1) % projects.length];

  const links = [
    { href: project.links.live, label: 'Visit live site', Icon: Globe },
    { href: project.links.github, label: 'View code', Icon: Github },
    { href: project.links.figma, label: 'View design', Icon: Figma },
  ].filter((l) => l.href);

  return (
    <main className="pd">
      <Header base="/" />
      <div className="pd-bar container">
        <Link href="/#work" className="pd-back mono">
          <ArrowLeft size={16} /> All work
        </Link>
      </div>

      <header className="pd-head container">
        <p className="mono pd-kicker">
          <span>{String(index + 1).padStart(2, '0')}</span> / {project.category} / {project.year}
        </p>
        <h1 className="display pd-title">{project.title}</h1>
        <p className="pd-tagline">{project.description}</p>
      </header>

      <div className="container">
        <div className="pd-frame nm">
          <ProjectLogo project={project} className="pd-visual" />
        </div>
      </div>

      <div className="pd-body container">
        <article className="pd-main">
          <section>
            <h2 className="mono">About the project</h2>
            <p className="pd-lead">{project.fullDescription}</p>
          </section>

          <section>
            <h2 className="mono">Key features</h2>
            <ol className="pd-features">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="mono">Challenge &amp; approach</h2>
            <p>{project.challenges}</p>
          </section>

          {project.image && (
            <section>
              <h2 className="mono">Preview</h2>
              <div className="pd-shot nm">
                <Image
                  src={project.image}
                  alt={`${project.title} homepage`}
                  width={1600}
                  height={1000}
                  sizes="(max-width: 900px) 100vw, 760px"
                />
              </div>
            </section>
          )}
        </article>

        <aside className="pd-side">
          <div className="pd-card nm">
            <h2 className="mono">Stack</h2>
            <ul className="pd-tags">
              {project.technologies.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            {links.length > 0 && (
              <>
                <h2 className="mono">Links</h2>
                <div className="pd-links">
                  {links.map(({ href, label, Icon }) => (
                    <a key={label} href={href!} target="_blank" rel="noopener noreferrer" className="nm-btn nm-btn--accent">
                      <Icon size={18} /> {label} <ArrowUpRight size={16} />
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        </aside>
      </div>

      <Link href={`/project/${next.id}`} className="pd-next container">
        <span className="mono">Next project</span>
        <span className="display pd-next-title">
          {next.title} <ArrowRight className="pd-next-arrow" />
        </span>
      </Link>
    </main>
  );
};

export default ProjectDetail;
