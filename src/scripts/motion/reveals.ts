import { gsap } from 'gsap';
import { EASE } from './index.ts';

export function initHeroSequence(context: gsap.Context) {
  const conditions = context.conditions as { reduceMotion?: boolean; isMobile?: boolean } | undefined;
  const isReduced = conditions?.reduceMotion === true;
  const isMobile = conditions?.isMobile === true;
  const getDuration = (base: number) => isReduced ? 0 : base;

  const tl = gsap.timeline();

  // 1. Hero Headline
  const heroHeadlines = gsap.utils.toArray<HTMLElement>('[data-motion="hero-headline"]');
  if (heroHeadlines.length > 0) {
    tl.from(heroHeadlines, {
      y: isReduced ? 0 : (isMobile ? 15 : 25),
      opacity: 0,
      duration: getDuration(0.8),
      ease: EASE.out,
      stagger: 0.1,
      clearProps: 'all'
    }, 0); // start at time 0
  }

  // 2. Hero Copy
  const heroCopy = gsap.utils.toArray<HTMLElement>('[data-motion="hero-copy"]');
  if (heroCopy.length > 0) {
    tl.from(heroCopy, {
      y: isReduced ? 0 : (isMobile ? 10 : 20),
      opacity: 0,
      duration: getDuration(0.8),
      ease: EASE.out,
      stagger: 0.1,
      clearProps: 'all'
    }, isReduced ? 0 : 0.2); // slight delay after headline
  }

  // 3. Hero Media (Calm)
  const heroMedia = gsap.utils.toArray<HTMLElement>('[data-motion="hero-media"]');
  if (heroMedia.length > 0) {
    tl.from(heroMedia, {
      scale: isReduced ? 1 : 1.02,
      opacity: 0,
      duration: getDuration(1.2),
      ease: "power2.out", 
      clearProps: 'all'
    }, isReduced ? 0 : 0.35); // overlapping the copy
  }
}

export function initFeaturedProject(context: gsap.Context) {
  const conditions = context.conditions as { reduceMotion?: boolean; isMobile?: boolean } | undefined;
  const isReduced = conditions?.reduceMotion === true;
  const isMobile = conditions?.isMobile === true;
  const getDuration = (base: number) => isReduced ? 0 : base;

  const projectMediaList = gsap.utils.toArray<HTMLElement>('[data-motion="project-media"]');
  const projectCopyList = gsap.utils.toArray<HTMLElement>('[data-motion="copy"]'); // Used for featured project copy

  // For each featured project, we create a scroll trigger timeline
  projectMediaList.forEach((media, index) => {
    const copy = projectCopyList[index];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: media,
        start: isMobile ? "top 90%" : "top 85%",
        toggleActions: "play none none none"
      }
    });

    tl.from(media, {
      scale: isReduced ? 1 : 1.02,
      opacity: 0,
      duration: getDuration(1.0),
      ease: "power2.out",
      clearProps: 'all'
    }, 0);

    if (copy) {
      tl.from(copy, {
        y: isReduced ? 0 : 15,
        opacity: 0,
        duration: getDuration(0.8),
        ease: EASE.out,
        clearProps: 'all'
      }, isReduced ? 0 : 0.2);
    }
  });
}
