export type JsonLd = Record<string, unknown>;

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

export function normalizeCanonicalPath(pathname: string): string {
  if (pathname === "/") return "/";
  return `${pathname.replace(/\/+$/, "")}/`;
}
