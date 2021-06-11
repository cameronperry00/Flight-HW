import { gsap } from "gsap";

export let speedometersTL = gsap.timeline();
        speedometersTL.fromTo("#speedometers",{alpha:0},{alpha:1, delay:1})
        speedometersTL.fromTo("#speed_dial1",{alpha:0},{alpha:1,duration:.9})
        speedometersTL.fromTo("#speed_dial2",{alpha:0},{alpha:1,duration:.9})
        speedometersTL.fromTo("#numbers1",{alpha:0},{alpha:1})
        speedometersTL.fromTo("#numbers2",{alpha:0},{alpha:1})
        speedometersTL.fromTo("#mph_text",{alpha:0},{alpha:1})
        speedometersTL.fromTo("#rpm_text",{alpha:0},{alpha:1})
        speedometersTL.fromTo("#tick_marks1",{alpha:0},{alpha:1, y:"+=0", x:"+=0", delay: .5, ease:"power4.in"})
        speedometersTL.fromTo("#tick_marks2",{alpha:0},{alpha:1, y:"+=0", x:"+=0", ease:"power4.in"})

