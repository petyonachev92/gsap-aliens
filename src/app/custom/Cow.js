import EventEmitter from "eventemitter3";
import gsap from "gsap/all";

const EVENTS = {
    ABDUCT_COMPLETED: 'abduct_completed'
}

export default class Cow extends EventEmitter {
    constructor() {
        super()
        this._cowElement = document.getElementsByClassName('cow');
    }

    static get events() {
        return EVENTS;
    }

    async moveTo() {
        await gsap.to(this._cowElement, {id: "cowAbduction", y: -390, duration: 1})
        this.emit(Cow.events.ABDUCT_COMPLETED)
    }

    async hide() {
        await gsap.to(this._cowElement, {id: "cowHide", opacity: 0})
    }
}