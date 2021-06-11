import { gsap } from "gsap";

export let logoTL = gsap.timeline();

gsap.set("#background",{transformOrigin:"center"});


logoTL.to("#background",{duration:1,ease: "power4.out"})
        logoTL.to("#chevy_logo",{ease: "power4.out", opacity: 1, duration: 0.3 })
            
            