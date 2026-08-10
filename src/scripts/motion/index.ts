import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initReveals } from './reveals';
import { initParallax } from './parallax';

gsap.registerPlugin(ScrollTrigger);

// Easing variables derived from Emil Kowalski / apple-design guidelines
export const EASE = {
  out: "cubic-bezier(0.23, 1, 0.32, 1)", // Strong ease-out for UI
  inOut: "cubic-bezier(0.77, 0, 0.175, 1)", // Strong ease-in-out for on-screen movement
  drawer: "cubic-bezier(0.32, 0.72, 0, 1)", // iOS-like drawer curve
  default: "power2.out"
};

export function initMotion() {
  const mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
      reduceMotion: "(prefers-reduced-motion: reduce)"
    },
    (context) => {
      initReveals(context);
      
      // Parallax is purely decorative, so we disable it under reduced motion
      const conditions = context.conditions as { reduceMotion?: boolean; isMobile?: boolean; isDesktop?: boolean } | undefined;
      if (!conditions?.reduceMotion) {
        initParallax(context);
      }

      // Refresh ScrollTrigger to ensure all layout calculations are correct
      ScrollTrigger.refresh();
      
      return () => {
        // matchMedia handles cleanup of all ScrollTriggers and Tweens created inside it
      };
    }
  );
}
