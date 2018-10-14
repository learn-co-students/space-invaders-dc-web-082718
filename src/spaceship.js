class Spaceship {

  constructor(name, crew, phasers, shields){
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"
    if (crew.length < 1){
      this.docked = true
    }
    else {
      this.docked = false
      crew.map(x => x.currentShip = this)
      this.crew = crew
    }
  }
}
