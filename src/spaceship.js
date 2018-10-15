class Spaceship {
  constructor(name, crew, phasers, shields){
    this.name = name
    this.crew = crew
    this.phasers = 5
    this.shields = 4
    this.warpDrive = "disengaged"
    this.cloaked = false
    this.phasersCharge = "uncharged"

    if (this.crew.length == 0){
      this.docked = true
    } else {
      this.docked = false
      crew.forEach(member => member.currentShip = this)
    }
  }



}
