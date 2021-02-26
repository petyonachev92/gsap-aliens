import EventEmitter from "eventemitter3"
import gsap from "gsap/all"

const EVENTS = {
    FLY_IN: 'fly_in',
    FLY_AWAY: 'fly_away',
    BEAM_SHOW: 'beam_show',
    BEAM_HIDE: 'beam_hide'
}

export default class Saucer extends EventEmitter{
    constructor() {
        super()
        this._saucerElement = document.getElementsByClassName('ufo')
        this._beamTopElement = document.getElementById('beam-top')
        this._beamBottomElement = document.getElementById('beam-bottom')
    }

    static get events() {
        return EVENTS;
    }

    async moveTo() {
        
        await gsap.to(this._saucerElement, {id: "flyIn", x: -835, duration: 2})
        this.emit(Saucer.events.FLY_IN)
                
    }

    async toggleBeam() {

        await gsap.to(this._beamTopElement, {id: "showTopBeam", opacity: 0.6})
        await gsap.to(this._beamBottomElement, {id: "showBottomBeam", opacity: 0.6})
        this.emit(Saucer.events.BEAM_SHOW)
    }
    
    async hideBeam() {
        await gsap.to(this._beamTopElement, {id: "hideTopBeam", opacity: 0})
        await gsap.to(this._beamBottomElement, {id: "hideBottomBeam", opacity: 0})
        this.emit(Saucer.events.BEAM_HIDE)

    }

    async flyAway() {
        await gsap.to(this._saucerElement, {id: "flyOut", x: -1800, duration: 2})
        this.emit(Saucer.events.FLY_AWAY)
    }
}