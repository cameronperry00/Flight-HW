import { gsap } from "gsap";

export let musicPanelTL = gsap.timeline();
     musicPanelTL.fromTo("#music_panel",{alpha:0},{alpha:1, y:"+=0", x:"+=0",duration:.9, ease:"power4.in"})
     musicPanelTL.fromTo("#music_buttons",{alpha:0},{alpha:1, y:"+=0", x:"+=0",duration:.9, ease:"power4.in"})
     musicPanelTL.fromTo("#song_title",{alpha:0},{alpha:1, y:"+=0", x:"+=0",duration:.9, ease:"power4.in"})
     musicPanelTL.fromTo("#artist",{alpha:0},{alpha:1, y:"+=0", x:"+=0",duration:.9, ease:"power4.in"})