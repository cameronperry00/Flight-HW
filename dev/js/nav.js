import { gsap } from "gsap";

export let navTL = gsap.timeline();
     navTL.fromTo("#navigation",{alpha:0},{alpha:1, y:"+=0", x:"+=0",duration: .9, ease:"power4.in"})
     navTL.fromTo("#nav_bee",{alpha:0},{alpha:1, y:"+=0", x:"+=0",duration: .9, ease:"power4.in"})