import { profile, projects } from '../data/projects';

// JSON-LD that tells search engines this site *is* Bimme Audrey Zun's profile.
// ProfilePage + Person is what Google uses for personal/portfolio sites; sameAs ties
// the site to the social profiles that already rank for the name.
export default function SEOHead() {
  const SITE = profile.url;
  const personId = `${SITE}/#person`;

  const person = {
    '@type': 'Person',
    '@id': personId,
    name: profile.name,
    alternateName: ['Bimme Audrey', 'Audrey Bimme', 'Bimme Audrey Z.', 'Bimme'],
    givenName: 'Bimme Audrey',
    familyName: 'Zun',
    url: SITE,
    image: `${SITE}/opengraph-image`,
    email: `mailto:${profile.email}`,
    jobTitle: profile.role,
    description:
      'Frontend web developer in Yaoundé, Cameroon, building responsive websites and interfaces with React and Next.js.',
    worksFor: { '@type': 'Organization', name: 'Anexiums', url: 'https://anexiums.com/' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Siantou University Institute' },
    address: { '@type': 'PostalAddress', addressLocality: 'Yaoundé', addressCountry: 'CM' },
    knowsAbout: ['Frontend development', 'React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Responsive web design', 'UI design'],
    sameAs: profile.socials.map((s) => s.href),
  };

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${SITE}/#profile`,
        url: SITE,
        name: 'Bimme Audrey Zun — Frontend Developer',
        inLanguage: 'en',
        mainEntity: { '@id': personId },
        hasPart: projects.map((p) => ({
          '@type': 'CreativeWork',
          name: p.title,
          url: `${SITE}/project/${p.id}`,
          creator: { '@id': personId },
        })),
      },
      person,
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: SITE,
        name: 'Bimme Audrey Zun',
        alternateName: ['Bimme Audrey', 'Bimme Audrey Portfolio'],
        publisher: { '@id': personId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }}
    />
  );
}
