// let crewMemberId = 0

class CrewMember {
  constructor(position, currentShip){
    // this.id = ++crewMemberId
    this.position = position
    this.currentShip = "Looking for a Rig"
  }

  engageWarpDrive(){
    if (this.currentShip == "Looking for a Rig"){
      return "had no effect"
    }
    else if (this.currentShip != "Looking for a Rig" && this.position == "Pilot"){
      this.currentShip.warpDrive = "engaged"
    }
  }

  setsInvisibility(){
    if (this.currentShip == "Looking for a Rig"){
      return "had no effect"
    }
    else if (this.currentShip != "Looking for a Rig" && this.position == "Defender"){
      this.currentShip.cloaked = true
    }
  }

  chargePhasers(){
    if (this.currentShip == "Looking for a Rig"){
      return "had no effect"
    }
    else if (this.currentShip != "Looking for a Rig" && this.position == "Gunner"){
      this.currentShip.phasersCharge = "charged"
    }
  }

}
