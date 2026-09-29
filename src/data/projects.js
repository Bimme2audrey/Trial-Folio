// Single source of truth for projects — used by the hero shatter, the Work list and /project/[id].
export const projects = [
  {
    id: '2',
    title: 'CAPVETS Ordering',
    logo: '/logos/ordering.png',
    mark: 'CAPVETS',
    markSub: 'Ordering',
    category: 'E-commerce Experience',
    year: '2025',
    image: '/images/Ordering_System.png',
    hue: 142,
    description: 'Farm-fresh food ordering platform with direct-to-consumer flow and strong UX.',
    fullDescription:
      'This ordering experience was designed to simplify the buying journey for fresh agricultural products, reducing friction while creating a more premium shopping feel. The interface emphasizes clarity, trust, and a quick path to conversion.',
    technologies: ['React', 'Next.js', 'JavaScript', 'CSS3', 'UI Systems'],
    features: [
      'Product-focused visual merchandising',
      'Simplified cart and checkout flow',
      'Conversion-oriented layout and hierarchy',
      'Responsive ordering experience',
      'Clear product presentation for freshness and trust',
    ],
    challenges:
      'The biggest challenge was turning a complex ordering flow into something intuitive and reassuring for users who want to shop quickly without losing confidence in product quality.',
    links: { live: 'https://ordering.capvets.com', github: null, figma: null },
  },
  {
    id: '3',
    title: 'CAPVETS Company',
    logo: '/logos/capvets.webp',
    mark: 'CAPVETS',
    category: 'Business Website',
    year: '2025',
    image: '/images/CAPVETS.png',
    hue: 46,
    description: 'Agricultural services company website with consultation booking and trust-building content.',
    fullDescription:
      'A brand-forward business website built to help a company present its value clearly across livestock, crop, and veterinary services. The experience guides visitors toward service discovery and direct inquiries with a professional, modern design.',
    technologies: ['React', 'Next.js', 'JavaScript', 'CSS3', 'Lead Generation'],
    features: [
      'Professional service positioning',
      'Consultation and contact funnels',
      'Client trust and testimonial sections',
      'Service discovery and industry storytelling',
      'SEO-friendly structure',
    ],
    challenges:
      'The goal was to communicate technical agricultural expertise in a way that felt approachable, credible, and conversion-ready for potential clients and partners.',
    links: { live: 'https://capvets.com', github: null, figma: null },
  },
  {
    id: '4',
    title: 'CJ Visuals Productions',
    logo: '/logos/cj-visuals.png',
    logoMono: true, // single-colour mark: tinted to match the theme
    mark: 'CJ Visuals',
    category: 'Creative Studio',
    year: '2025',
    image: null,
    hue: 40,
    description:
      'A cinematic creative brand website focused on premium visuals, storytelling, and strong conversion for service inquiries.',
    fullDescription:
      'This website builds an elevated visual identity for a production company, using a cinematic aesthetic and polished messaging strategy to attract clients who value premium creative work. The layout emphasizes storytelling, confidence, and clear inquiry conversion.',
    technologies: ['Next.js', 'Brand Design', 'Creative UX', 'Responsive Layout'],
    features: [
      'Cinematic brand storytelling',
      'Service-focused conversion structure',
      'High-impact visual pacing',
      'Lead generation for creative inquiries',
      'Elegant mobile experience',
    ],
    challenges:
      'The challenge was balancing a premium creative feel with functional clarity so visitors immediately understand what the studio offers and how to contact them.',
    links: { live: 'https://www.cjvisualsproductions.com/', github: null, figma: null },
  },
  {
    id: '5',
    title: 'Anexiums',
    logo: null,
    mark: 'Anexiums',
    category: 'Business Website',
    year: '2025',
    image: null,
    hue: 220,
    description:
      'A polished digital presence designed to elevate a modern business brand with clarity, trust, and confidence-building content.',
    fullDescription:
      'Anexiums needed a cleaner and more premium online presence that instantaneously communicated professionalism and credibility. The result is a streamlined experience built around clarity, trust, and business-focused user flow.',
    technologies: ['Next.js', 'UX Strategy', 'Responsive Design', 'Brand Positioning'],
    features: [
      'Professional business storytelling',
      'Trust-building content layout',
      'Modern conversion-focused structure',
      'Clear service communication',
      'Responsive, premium presentation',
    ],
    challenges:
      'The key challenge was helping the brand feel established, modern, and credible without overwhelming the visitor with too much complexity or clutter.',
    links: { live: 'https://anexiums.com/', github: null, figma: null },
  },
  {
    id: '1',
    title: 'DANIHF Foundation',
    logo: '/logos/danihf.png',
    mark: 'DANIHF',
    category: 'Non-profit Website',
    year: '2025',
    image: '/images/danihf.png',
    hue: 148,
    description: 'Humanitarian foundation website with impact tracking and project management.',
    fullDescription:
      'A powerful humanitarian website designed to raise trust, highlight community impact, and guide visitors toward meaningful engagement. It combines storytelling, measurable outcomes, and clear calls to action to support a mission-driven organization.',
    technologies: ['React', 'Next.js', 'JavaScript', 'CSS3', 'Responsive Design'],
    features: [
      'Multi-section storytelling for mission and impact',
      'Impact stats and campaign highlights',
      'Project showcase and gallery layout',
      'Volunteer and contact engagement paths',
      'Mobile-first accessible experience',
    ],
    challenges:
      'The site needed to balance emotional storytelling with credibility and clarity, especially when presenting complex humanitarian work to diverse audiences across devices.',
    links: { live: 'https://danihf.org', github: null, figma: null },
  },
];

export const getProject = (id) => projects.find((p) => p.id === String(id));

export const profile = {
  name: 'Bimme Audrey Zun',
  url: 'https://bimmeaudrey.vercel.app',
  role: 'Frontend Web Developer',
  location: 'Yaoundé, Cameroon',
  email: 'bimmedev@gmail.com',
  phone: '+237 673 795 727',
  blog: 'https://hashnode.com/@bimme',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bimme-audrey' },
    { label: 'GitHub', href: 'https://github.com/Bimme2audrey' },
    { label: 'X / Twitter', href: 'https://x.com/small_bimme' },
    { label: 'Hashnode', href: 'https://hashnode.com/@bimme' },
  ],
};
