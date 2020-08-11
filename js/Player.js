class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank=null;
    
  }
  //get the cars at end from the database
  getCarsAtEnd(){
     database.ref('CarsAtEnd').on("value",(data)=>{ 
      this.rank = data.val();
    })
  }
  //updates the car at end inside database(by mr grim reeper)
  //static because it is common for all objects(by mr grim reeper)
 static updateCarsAtEnd(rank){
    database.ref('/').update({
      CarsAtEnd : rank
      
    });
  }


  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
