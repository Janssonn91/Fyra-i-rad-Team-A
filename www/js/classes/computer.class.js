class Computer extends Player{
 
  constructor(game, name, color){
    super(game, name, color);
  }

  // Modifierad variant av dropBrick()-metoden från Player-klassen
  // Randomiserar fram ett nummer mellan 0 och 6
  // Math.floor(Math.random()*7);
  computerDropBrick(){
		setTimeout(() => {
  		let colNumber;
      do {
        colNumber = Math.floor(Math.random()*7);
    	} while(!this.game.makeMove(colNumber));
    }, 1500);
	}

}