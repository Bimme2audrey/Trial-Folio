export default function SEOHead() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bimme Audrey",
    "url": "https://bimmeaudrey.vercel.app",
    "sameAs": [
      "https://www.linkedin.com/in/bimme-audrey",
      "https://x.com/small_bimme",
      "https://github.com/bimme2audrey",
      "https://hashnode.com/@bimme"
    ],
    "jobTitle": "Frontend Web Developer",
    "description": "Frontend Web Developer specializing in React, Next.js, and modern web technologies",
    "knowsAbout": [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Responsive Web Design",
      "Web Development"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Anexiums"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Yaounde",
      "addressCountry": "Cameroon"
    },
    "email": "bimmedev@gmail.com"
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bimme Audrey Portfolio",
    "url": "https://bimmeaudrey.vercel.app",
    "description": "Frontend Web Developer portfolio showcasing React projects and modern responsive websites",
    "author": {
      "@type": "Person",
      "name": "Bimme Audrey"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://bimmeaudrey.vercel.app/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}
