const spaceships = [];
let shipCounter = 0;

class Spaceship {

  constructor(name, crew, phasers = 5, shields = 4,) {

    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged'
    this.id = ++shipCounter;

    if(crew.length != 0) {
      this.docked = false;
      crew.map(function(member) {
        member.currentShip = this;
      }.bind(this))
    } else {
      this.docked = true;
    }

    this.crew = crew;
    spaceships.push(this);

  }



}
