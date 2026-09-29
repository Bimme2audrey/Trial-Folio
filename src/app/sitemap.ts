import { MetadataRoute } from 'next';
import { profile, projects } from '../data/projects';

// Only real URLs — search engines ignore #fragments, so section anchors don't belong here.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: profile.url, lastModified, changeFrequency: 'monthly', priority: 1 },
    ...projects.map((p) => ({
      url: `${profile.url}/project/${p.id}`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ];
}
