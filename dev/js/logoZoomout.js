import { gsap } from "gsap";

gsap.set("#chevy_logo",{transformOrigin:"center"})
gsap.set("#bee_filled",{transformOrigin:"center"})
;


export let logoZoomoutTL = gsap.timeline();

logoZoomoutTL.fromTo("#chevy_logo",{alpha:1, scale:1},{alpha:0, duration:4, scale:5, y:"+=0", x:"+=100",ease:"power4.in"})
logoZoomoutTL.fromTo("#bee_filled",{alpha:1},{alpha:0, duration:4, scale:5, y:"+=0", x:"+=0",delay:1})