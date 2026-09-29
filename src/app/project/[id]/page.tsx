import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetail from '../../../components/ProjectDetail';
import { getProject, projects } from '../../../data/projects';

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).id);
  if (!project) return { title: 'Project not found' };
  const title = `${project.title} — ${project.category}`;
  return {
    title,
    description: project.description,
    alternates: { canonical: `/project/${project.id}` },
    openGraph: { type: 'article', title, description: project.description, url: `/project/${project.id}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  if (!getProject(id)) notFound();
  return <ProjectDetail projectId={id} />;
}
