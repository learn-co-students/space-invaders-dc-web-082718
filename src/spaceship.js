let spaceshipId = 0;

class Spaceship {
  constructor(name, crew, phasers, shields){
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.crew = crew;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";
    if (this.crew.length){
      this.docked = false;
    } else {
      this.docked = true;
    }
    this.association();
  }
  association(){
    this.crew.forEach(member => member.currentShip = this)
  }
}
