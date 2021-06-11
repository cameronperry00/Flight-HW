import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

// import {numberThing} from "./demo-this"

import { logoTL } from "./logo"
import { logoZoomoutTL } from "./logoZoomout"
import { sidePanelTL } from "./sidePanel"
import { speedometersTL } from "./speedometers"
import { musicPanelTL } from "./musicPanel"
import { newScreenTL } from "./newScreen"
import { navTL } from "./nav"




gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(logoTL)


        .add(logoZoomoutTL)

        .add(sidePanelTL) 
        
        .add(speedometersTL)
        
        .add(musicPanelTL)

        .add(newScreenTL)
        
        .add(navTL);


// console.log(numberThing);


