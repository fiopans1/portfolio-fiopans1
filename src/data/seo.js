export const siteMetadata = {
  SITE_NAME: "Diego Suárez Ramos | fiopans1",
  SITE_URL: "https://fiopans1.com",
  DEFAULT_DESCRIPTION:
    "Portfolio of Diego Suárez Ramos (fiopans1) – Full-Stack Developer specialized in Java, Spring Boot & React. Building scalable web applications with modern technologies. Available for hire.",
  DEFAULT_IMAGE: "https://fiopans1.com/og-image.png",
  DEFAULT_KEYWORDS:
    "Diego Suárez Ramos, fiopans1, full-stack developer, Java developer, Spring Boot, React, backend developer, web developer, portfolio, software engineer, Spain",
};

const { SITE_URL } = siteMetadata;

export const websiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "fiopans1",
  url: SITE_URL,
  inLanguage: "en",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/projects?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

export const personJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Diego Suárez Ramos",
  alternateName: "fiopans1",
  url: SITE_URL,
  jobTitle: "Full-Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Denodo",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidade da Coruña",
  },
  knowsAbout: [
    "Java",
    "Spring Boot",
    "React",
    "Full-Stack Development",
    "MySQL",
    "Docker",
    "Python",
  ],
  sameAs: [
    "https://github.com/fiopans1",
    "https://www.linkedin.com/in/diego-suárez-ramos-003236162/",
    "https://twitter.com/dualwarepc",
    "https://www.instagram.com/diego_sr16",
  ],
});

export const breadcrumbJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

export const projectJsonLd = (project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: project.title,
  description: project.description,
  url: `${SITE_URL}/projects/${project.slug}`,
  author: {
    "@type": "Person",
    name: "Diego Suárez Ramos",
    url: SITE_URL,
  },
  datePublished: `${project.year}-01-01`,
  keywords: project.tags.join(", "),
  codeRepository: project.ghLink,
  ...(project.demoLink && { sameAs: [project.demoLink] }),
});
