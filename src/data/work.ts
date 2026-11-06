/**
 * Verified experience and academic projects. The photography is illustrative,
 * not a claimed screenshot or an image of a client's private system.
 */
export const work = [
  {
    slug: "widhi-asih-bali-export",
    title: "Widhi Asih Bali Export",
    type: "Professional Experience",
    category: "Professional Experience",
    year: "2026 — Present",
    period: "June 2026 — Present",
    location: "Gianyar, Bali, Indonesia",
    description:
      "Web Developer at Widhi Asih Bali Export, a professional position held since June 2026.",
    image:
      "https://images.unsplash.com/photo-1752223638233-4c9545333f89?auto=format&fit=crop&fm=jpg&q=86&w=2400",
    imageAlt: "Illustrative modern software development workspace",
    meta: "Web Developer · Web applications · Maintainable software",
    highlights: [
      "Web Developer role since June 2026",
      "Professional web development",
      "Frontend and backend software experience",
    ],
    overview:
      "Widhi Asih Bali Export is my current professional role. It provides practical experience developing and maintaining web applications in a business setting. Client source code and private systems are not published here.",
  },
  {
    slug: "diagnostic-assessment-system",
    title: "LLM-Based Diagnostic Assessment System",
    type: "Academic Project & Publication",
    category: "Academic Project & Publication",
    year: "University Project",
    period: "2026",
    location: "Universitas Pendidikan Ganesha",
    description:
      "A diagnostic assessment system developed to identify students' initial abilities using a large language model.",
    image:
      "https://images.unsplash.com/photo-1761123261084-53c40fe1e607?auto=format&fit=crop&q=84&w=2400",
    imageAlt: "Illustrative computer workspace for academic software development",
    meta: "Educational technology · Diagnostic assessment · Software engineering",
    highlights: [
      "Diagnostic assessment of students' initial abilities",
      "LLM-based educational software research",
      "Research publication in 2026",
    ],
    overview:
      "This academic software project explored diagnostic assessment of students' initial abilities. Associated publication: “Development of a Large Language Model-Based Diagnostic Assessment System for Detecting Students' Initial Abilities” (Measurement In Educational Research, 6(1), 2026).",
  },
  {
    slug: "informatics-teaching-internship",
    title: "SMP Negeri 6 Singaraja",
    type: "Informatics Teaching Internship",
    category: "Informatics Teaching Internship",
    year: "Sep — Dec 2025",
    period: "September 2025 — December 2025",
    location: "Singaraja, Bali, Indonesia",
    description:
      "Informatics teaching internship, including C++ algorithm and competition mentoring.",
    image:
      "https://images.unsplash.com/photo-1746021451691-4385f318ec13?auto=format&fit=crop&q=84&w=2400",
    imageAlt: "Illustrative learning and working environment",
    meta: "Informatics education · C++ mentoring · Algorithmic thinking",
    highlights: [
      "Informatics teaching from September to December 2025",
      "C++ algorithm and competition mentoring",
      "Mentored participants who achieved Juara Harapan 1",
    ],
    overview:
      "I taught core Informatics topics and mentored students in C++ programming, algorithmic logic, and competition preparation. My CV records a Juara Harapan 1 result achieved by the students I coached.",
  },
] as const;

export type WorkEntry = (typeof work)[number];
