// Replace your current useIPhoneScroll.js with this version.
// It keeps the FIRST section (Hero) fully sharp and visible on initial load,
// and only fades it when the user starts scrolling.

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useIPhoneScroll = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray(".iphone-section");

    const ctx = gsap.context(() => {
      sections.forEach((section, index) => {
        const content = section.querySelector(".content");
        if (!content) return;

        const isHero = index === 0;

        // HERO: start perfectly visible (no blur on initial page load)
        if (isHero) {
          gsap.set(content, {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          });
        }

        // Pin each section
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "+=120%",
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        });

        // Create one timeline per section
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=120%",
            scrub: 1.5,
          },
        });

        if (!isHero) {
          // Non-hero sections animate in from blur
          tl.fromTo(
            content,
            {
              opacity: 0,
              y: 80,
              scale: 0.96,
              filter: "blur(12px)",
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              ease: "none",
              duration: 0.35,
            },
          );
        } else {
          // Hero stays fully visible during the first half of scroll
          tl.to(content, {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            ease: "none",
            duration: 0.55,
          });
        }

        // Smooth fade-out and blur on scroll for all sections
        tl.to(
          content,
          {
            opacity: 0,
            y: -40,
            scale: 0.985,
            filter: "blur(8px)",
            ease: "none",
            duration: 0.35,
          },
          isHero ? 0.6 : 0.55,
        );
      });
    });

    // Refresh after layout settles
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};

export default useIPhoneScroll;
