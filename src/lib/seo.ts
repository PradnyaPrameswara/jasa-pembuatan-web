export type JsonLd = Record<string, unknown>;
export type SeoPageType = "WebPage" | "ProfilePage" | "ContactPage" | "CollectionPage";

export const SEO = {
  siteName: "Pradnya Prameswara",
  fullName: "Anak Agung Gede Pradnya Prameswara",
  siteUrl: "https://www.pradnyaprameswara.web.id",
  locale: "en_US",
  language: "en",
  defaultTitle: "Anak Agung Gede Pradnya Prameswara | Fullstack Web Developer",
  defaultDescription:
    "Fullstack Web Developer and Informatics Education graduate in Gianyar, Bali, building responsive, maintainable, user-focused web applications.",
  defaultImage:
    "https://images.unsplash.com/photo-1752223638233-4c9545333f89?auto=format&fit=crop&fm=jpg&q=86&w=2400",
  defaultImageAlt: "Modern software development workspace representing Pradnya Prameswara's portfolio",
  email: "agungpradnya7@gmail.com",
  linkedin: "https://www.linkedin.com/in/pradnyaprameswara/",
  github: "https://github.com/PradnyaPrameswara",
} as const;

export const PERSON_ID = `${SEO.siteUrl}/#person`;
export const WEBSITE_ID = `${SEO.siteUrl}/#website`;

export const personJsonLd: JsonLd = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: SEO.fullName,
  alternateName: SEO.siteName,
  url: `${SEO.siteUrl}/`,
  email: SEO.email,
  jobTitle: "Fullstack Web Developer",
  description: SEO.defaultDescription,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gianyar",
    addressRegion: "Bali",
    addressCountry: "Indonesia",
  },
  sameAs: [SEO.linkedin, SEO.github],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universitas Pendidikan Ganesha",
  },
  worksFor: {
    "@type": "Organization",
    name: "Widhi Asih Bali Export",
  },
  knowsAbout: ["HTML", "TypeScript", "Astro", "React", "REST API", "SQL", "CSS", "Python"],
};

export const websiteJsonLd: JsonLd = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SEO.siteUrl}/`,
  name: SEO.siteName,
  alternateName: SEO.fullName,
  description: SEO.defaultDescription,
  inLanguage: SEO.language,
  author: { "@id": PERSON_ID },
};

const routeSocialImages: Record<string, { src: string; alt: string }> = {
  "/": {
    src: SEO.defaultImage,
    alt: SEO.defaultImageAlt,
  },
  "/about/": {
    src: "https://images.unsplash.com/photo-1746021451691-4385f318ec13?auto=format&fit=crop&q=84&w=2200",
    alt: "Bright professional workspace representing Pradnya Prameswara's software development profile",
  },
  "/services/": {
    src: "https://images.unsplash.com/photo-1761123261084-53c40fe1e607?auto=format&fit=crop&q=84&w=2200",
    alt: "Software development workspace representing fullstack web development capabilities",
  },
  "/contact/": {
    src: "https://images.unsplash.com/photo-1684560208006-274881cc4c4b?auto=format&fit=crop&q=84&w=2200",
    alt: "Organized software development workspace representing contact and opportunity inquiries",
  },
  "/work/": {
    src: SEO.defaultImage,
    alt: "Software development workspace representing Pradnya Prameswara's experience and projects",
  },
  "/work/widhi-asih-bali-export/": {
    src: SEO.defaultImage,
    alt: "Modern software development workspace representing web development experience at Widhi Asih Bali Export",
  },
  "/work/diagnostic-assessment-system/": {
    src: "https://images.unsplash.com/photo-1761123261084-53c40fe1e607?auto=format&fit=crop&q=84&w=2400",
    alt: "Computer workspace representing the LLM-based diagnostic assessment academic project",
  },
  "/work/informatics-teaching-internship/": {
    src: "https://images.unsplash.com/photo-1746021451691-4385f318ec13?auto=format&fit=crop&q=84&w=2400",
    alt: "Bright learning environment representing the Informatics teaching internship",
  },
};

export function normalizeCanonicalPath(pathname: string): string {
  if (pathname === "/") return "/";
  return `${pathname.replace(/\/+$/, "")}/`;
}

export function getRouteSocialImage(pathname: string): { src: string; alt: string } {
  return routeSocialImages[normalizeCanonicalPath(pathname)] ?? {
    src: SEO.defaultImage,
    alt: SEO.defaultImageAlt,
  };
}

export function inferPageType(pathname: string): SeoPageType {
  const path = normalizeCanonicalPath(pathname);

  if (path === "/" || path === "/about/") return "ProfilePage";
  if (path === "/contact/") return "ContactPage";
  if (path === "/services/" || path === "/work/") return "CollectionPage";
  return "WebPage";
}
