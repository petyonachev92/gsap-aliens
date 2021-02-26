import EventEmitter from "eventemitter3";
import gsap from "gsap/all";
import Cow from "./Cow";
import Saucer from "./Saucer";

export default class Animation extends EventEmitter {
    constructor() {
        super()
        this.saucer = new Saucer()
        this.cow = new Cow()
    }

    async start() {
               
        this.saucer.on(Saucer.events.FLY_IN, () => this.saucer.toggleBeam())
        this.saucer.on(Saucer.events.BEAM_SHOW, () => this.cow.moveTo())
        this.cow.on(Cow.events.ABDUCT_COMPLETED, () => this.saucer.hideBeam())
        this.cow.on(Cow.events.ABDUCT_COMPLETED, () => this.cow.hide())
        this.saucer.on(Saucer.events.BEAM_HIDE, () => this.saucer.flyAway())
                
        await this.saucer.moveTo()
        
    }
}