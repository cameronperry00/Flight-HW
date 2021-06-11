import { gsap } from "gsap";

export let newScreenTL = gsap.timeline();
    newScreenTL.to("#bee_outline",{alpha:1, alpha:0})
    newScreenTL.to("#music_panel",{alpha:1, alpha:0})
    newScreenTL.to("#artist",{alpha:1, alpha:0})
    newScreenTL.to("#song_title",{alpha:1, alpha:0})
    newScreenTL.to("#music_buttons",{alpha:1, alpha:0})
    