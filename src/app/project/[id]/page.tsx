'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import ProjectDetail from '../../../components/ProjectDetail';

export default function ProjectPage() {
  const params = useParams();
  const id = params.id as string;

  return <ProjectDetail projectId={id} />;
}
