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
               
        this.saucer.on(Saucer.events.BEAM_SHOW, () => this.cow.moveTo())
        this.cow.on(Cow.events.ABDUCT_COMPLETED, () => this.cow.hide())
                
        await this.saucer.moveTo()
        await this.saucer.toggleBeam()
        await this.cow.moveTo()
        await this.cow.hide()
    }
}