 import { gsap } from "gsap";
 import { ScrollTrigger } from "gsap/ScrollTrigger";

 gsap.registerPlugin(ScrollTrigger);

 const intro = gsap.timeline({
   defaults: { duration: 0.6, ease: "power3.out" },
   paused: true,
 }).from(".hero-step", {
   y: 20,
   stagger: 0.12,
 });

 document.getElementById("replay-intro")?.addEventListener("click", () => {
   if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
     intro.restart();
   }
 });

 const motion = gsap.matchMedia();

 motion.add("(prefers-reduced-motion: no-preference)", () => {
   intro.play();

   gsap.to("#scroll-progress", {
     scaleX: 1,
     ease: "none",
     scrollTrigger: {
       trigger: document.documentElement,
       start: "top top",
       end: "bottom bottom",
       scrub: true,
     },
   });

   gsap.utils.toArray(".reveal").forEach((element) => {
     gsap.from(element, {
       y: 40,
       duration: 0.7,
       ease: "power2.out",
       scrollTrigger: {
         trigger: element,
         start: "top 80%",
         toggleActions: "play none none reverse",
       },
     });
   });
 });