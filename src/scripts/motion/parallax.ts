import { gsap } from 'gsap';

export function initParallax(context: gsap.Context) {
  const parallaxImages = gsap.utils.toArray<HTMLElement>('[data-motion="parallax"]');
  
  parallaxImages.forEach((img) => {
    gsap.to(img, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: img.parentElement || img,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });
}
