import { gsap } from 'gsap';
import { EASE } from './index';

export function initReveals(context: gsap.Context) {
  const conditions = context.conditions as { reduceMotion?: boolean; isMobile?: boolean; isDesktop?: boolean } | undefined;
  const isReduced = conditions?.reduceMotion === true;
  const isMobile = conditions?.isMobile === true;

  // We respect prefers-reduced-motion by keeping duration to 0 (skips animation visually)
  // or just fading opacity, but keeping transform flat. We'll flat-out 0 the duration for safety,
  // letting it instantly apply the final state.
  const getDuration = (base: number) => isReduced ? 0 : base;

  // 1. Hero Headline
  const heroHeadlines = gsap.utils.toArray<HTMLElement>('[data-motion="hero-headline"]');
  if (heroHeadlines.length > 0) {
    gsap.from(heroHeadlines, {
      y: isReduced ? 0 : (isMobile ? 15 : 25),
      opacity: 0,
      duration: getDuration(0.8),
      ease: EASE.out,
      stagger: 0.1,
      clearProps: 'all'
    });
  }

  // 2. Hero Copy
  const heroCopy = gsap.utils.toArray<HTMLElement>('[data-motion="hero-copy"]');
  if (heroCopy.length > 0) {
    gsap.from(heroCopy, {
      y: isReduced ? 0 : (isMobile ? 10 : 20),
      opacity: 0,
      duration: getDuration(0.8),
      delay: isReduced ? 0 : 0.2, // sequenced
      ease: EASE.out,
      stagger: 0.1,
      clearProps: 'all'
    });
  }

  // 3. Hero Media (Calm)
  const heroMedia = gsap.utils.toArray<HTMLElement>('[data-motion="hero-media"]');
  if (heroMedia.length > 0) {
    gsap.from(heroMedia, {
      scale: isReduced ? 1 : 1.02,
      opacity: 0,
      duration: getDuration(1.2),
      delay: isReduced ? 0 : 0.35, 
      ease: "power2.out", 
      clearProps: 'all'
    });
  }

  // 4. Section Headings
  const sectionHeadings = gsap.utils.toArray<HTMLElement>('[data-motion="section-heading"]');
  sectionHeadings.forEach((heading) => {
    gsap.from(heading, {
      scrollTrigger: {
        trigger: heading,
        start: isMobile ? "top 90%" : "top 85%",
        toggleActions: "play none none none"
      },
      y: isReduced ? 0 : 20,
      opacity: 0,
      duration: getDuration(0.6),
      ease: EASE.out,
      clearProps: 'all'
    });
  });

  // 5. Stagger Groups
  const staggerGroups = gsap.utils.toArray<HTMLElement>('[data-motion="stagger-group"]');
  staggerGroups.forEach((group) => {
    const items = gsap.utils.toArray<HTMLElement>('[data-motion="stagger-item"]', group);
    if (items.length === 0) return;

    gsap.from(items, {
      scrollTrigger: {
        trigger: group,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      y: isReduced ? 0 : 15,
      opacity: 0,
      duration: getDuration(0.6),
      stagger: isReduced ? 0 : 0.08,
      ease: EASE.out,
      clearProps: 'all'
    });
  });

  // 6. Project Media
  const projectMedia = gsap.utils.toArray<HTMLElement>('[data-motion="project-media"]');
  projectMedia.forEach((media) => {
    gsap.from(media, {
      scrollTrigger: {
        trigger: media,
        start: "top 90%",
        toggleActions: "play none none none"
      },
      scale: isReduced ? 1 : 1.02,
      opacity: 0,
      duration: getDuration(1.0),
      ease: "power2.out",
      clearProps: 'all'
    });
  });

  // 7. Generic Copy
  const genericCopy = gsap.utils.toArray<HTMLElement>('[data-motion="copy"]');
  genericCopy.forEach((copy) => {
    gsap.from(copy, {
      scrollTrigger: {
        trigger: copy,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      y: isReduced ? 0 : 15,
      opacity: 0,
      duration: getDuration(0.6),
      ease: EASE.out,
      clearProps: 'all'
    });
  });
}
