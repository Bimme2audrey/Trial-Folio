import React from 'react';
import Image from 'next/image';
import './ProjectLogo.css';

// Logo tile. Full-colour logos render as-is; single-colour marks (logoMono) render
// as a theme-tinted silhouette via CSS mask. Projects without a logo get a wordmark.
export default function ProjectLogo({ project, className = '' }) {
  const label = `${project.title} logo`;
  let content;
  if (project.logo && project.logoMono) {
    content = <span className="plogo-mask" role="img" aria-label={label} style={{ '--logo': `url(${project.logo})` }} />;
  } else if (project.logo) {
    content = (
      <span className="plogo-img">
        <Image src={project.logo} alt={label} fill sizes="(max-width: 720px) 60vw, 320px" />
      </span>
    );
  } else {
    content = (
      <span className="plogo-word" role="img" aria-label={label}>
        <span className="display">{project.mark}</span>
        {project.markSub && <span className="mono">{project.markSub}</span>}
      </span>
    );
  }

  return (
    <div className={`plogo ${className}`} style={{ '--h': project.hue }}>
      {content}
    </div>
  );
}
