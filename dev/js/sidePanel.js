import { gsap } from "gsap";

export let sidePanelTL = gsap.timeline();
gsap.set("#side_panel",{transformOrigin:"center"});

sidePanelTL.from("#bee_outline",{ease: "power4.out", opacity: .1 , duration: .9 })
sidePanelTL.fromTo("#side_panel",{alpha:0},{alpha:1, y:"+=0", x:"+=0",duration:.9, ease:"power4.in"})
sidePanelTL.fromTo("#gas",{alpha:0},{alpha:1, y:"+=0", x:"+=0",ease:"power4.in"})
sidePanelTL.fromTo("#temp_icon",{alpha:0},{alpha:1, y:"+=0", x:"+=0",ease:"power4.in"})
sidePanelTL.fromTo("#nav_icon",{alpha:0},{alpha:1, y:"+=0", x:"+=0", ease:"power4.in"})
sidePanelTL.fromTo("#music_icon",{alpha:0},{alpha:1, y:"+=0", x:"+=0", ease:"power4.in"})