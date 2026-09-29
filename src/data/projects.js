// Single source of truth for projects — used by the hero shatter, the Work list and /project/[id].
export const projects = [
  {
    id: '2',
    title: 'CAPVETS Ordering',
    logo: '/logos/ordering.png',
    mark: 'CAPVETS',
    markSub: 'Ordering',
    category: 'Full-stack e-commerce',
    year: '2025',
    image: '/images/Ordering_System.png',
    hue: 142,
    description: 'Farm-fresh food ordering platform with direct-to-consumer flow and strong UX.',
    featured: true, // gets the large case-study card at the top of Work
    headline: 'Making fresh-produce ordering quick and trustworthy',
    problem:
      'Buying fresh agricultural products online asks for a lot of trust. The ordering flow was complex, and shoppers needed to move fast without losing confidence in the quality of what they were buying.',
    approach:
      'I built it end to end. On the front, a product-first storefront with freshness-focused presentation, a simplified cart and a shorter, mobile-first checkout. Behind it, the server side that receives, stores and manages every order.',
    result:
      'A live direct-to-consumer ordering platform, from storefront to order data, that takes shoppers from browsing to a placed order in a short, reassuring path on any screen.',
    technologies: ['React', 'Next.js', 'JavaScript', 'CSS3', 'UI Systems'],
    features: [
      'Product-focused storefront built for freshness and trust',
      'Simplified cart and checkout flow',
      'Server-side order capture and management',
      'Conversion-oriented layout and hierarchy',
      'Responsive ordering experience on any device',
    ],
    links: { live: 'https://ordering.capvets.com', github: null, figma: null },
  },
  {
    id: '3',
    title: 'CAPVETS Company',
    logo: '/logos/capvets.webp',
    mark: 'CAPVETS',
    category: 'Full-stack business site',
    year: '2025',
    image: '/images/CAPVETS.png',
    hue: 46,
    description: 'Agricultural services company website with consultation booking and trust-building content.',
    headline: 'Making technical agri-services easy to understand',
    problem:
      'Livestock, crop and veterinary expertise is hard to grasp at a glance, so potential clients and partners struggled to see what the company offered and why they should trust it.',
    approach:
      'I organised the site around service discovery and storytelling, added trust signals like testimonials, and built consultation and contact funnels end to end, from the forms to the server side that handles each request, on an SEO-friendly structure.',
    result:
      'An approachable, credible company site that explains the services plainly and guides visitors toward booking a consultation.',
    technologies: ['React', 'Next.js', 'JavaScript', 'CSS3', 'Lead Generation'],
    features: [
      'Professional service positioning',
      'Consultation and contact funnels',
      'Client trust and testimonial sections',
      'Service discovery and industry storytelling',
      'SEO-friendly structure',
    ],
    links: { live: 'https://capvets.com', github: null, figma: null },
  },
  {
    id: '4',
    title: 'CJ Visuals Productions',
    logo: '/logos/cj-visuals.png',
    logoMono: true, // single-colour mark: tinted to match the theme
    mark: 'CJ Visuals',
    category: 'Full-stack studio site',
    year: '2025',
    image: null,
    hue: 40,
    description:
      'A cinematic creative brand website focused on premium visuals, storytelling, and strong conversion for service inquiries.',
    headline: 'Selling a premium studio without losing clarity',
    problem:
      'A production studio needed to feel cinematic and premium online, without leaving visitors unsure what it offers or how to hire it.',
    approach:
      'I paired cinematic visual pacing with a service-focused structure, so the storytelling leads straight into inquiry paths that are handled server-side, all tuned for mobile.',
    result: "A brand site that shows off the studio's creative quality and turns that interest into service inquiries.",
    technologies: ['Next.js', 'Brand Design', 'Creative UX', 'Responsive Layout'],
    features: [
      'Cinematic brand storytelling',
      'Service-focused conversion structure',
      'High-impact visual pacing',
      'Lead generation for creative inquiries',
      'Elegant mobile experience',
    ],
    links: { live: 'https://www.cjvisualsproductions.com/', github: null, figma: null },
  },
  {
    id: '5',
    title: 'Anexiums',
    logo: null,
    mark: 'Anexiums',
    category: 'Full-stack business site',
    year: '2025',
    image: null,
    hue: 220,
    description:
      'A polished digital presence designed to elevate a modern business brand with clarity, trust, and confidence-building content.',
    headline: 'Looking established without the clutter',
    problem:
      'The business needed to come across as established and credible online, but piling on content risked overwhelming visitors.',
    approach:
      'I streamlined the content into a clear, trust-building flow with focused service messaging, and built it front to back on a modern, responsive stack.',
    result: 'A cleaner, more premium presence that communicates professionalism from the first screen.',
    technologies: ['Next.js', 'UX Strategy', 'Responsive Design', 'Brand Positioning'],
    features: [
      'Professional business storytelling',
      'Trust-building content layout',
      'Modern conversion-focused structure',
      'Clear service communication',
      'Responsive, premium presentation',
    ],
    links: { live: 'https://anexiums.com/', github: null, figma: null },
  },
  {
    id: '1',
    title: 'DANIHF Foundation',
    logo: '/logos/danihf.png',
    mark: 'DANIHF',
    category: 'Full-stack non-profit site',
    year: '2025',
    image: '/images/danihf.png',
    hue: 148,
    description: 'Humanitarian foundation website with impact tracking and project management.',
    headline: 'Turning humanitarian work into trust and action',
    problem:
      'A humanitarian foundation had to present complex community work to very different audiences, balancing emotional storytelling with credibility.',
    approach:
      'I built multi-section storytelling around mission and impact, backed by a server side that manages projects and impact figures, with clear volunteer and contact paths, mobile-first and accessible.',
    result: "A site that builds trust in the foundation's work and gives every visitor a clear way to get involved.",
    technologies: ['React', 'Next.js', 'JavaScript', 'CSS3', 'Responsive Design'],
    features: [
      'Multi-section storytelling for mission and impact',
      'Impact stats and campaign highlights',
      'Project showcase and gallery layout',
      'Volunteer and contact engagement paths',
      'Mobile-first accessible experience',
    ],
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
