class Game {

  constructor(){
    this.board = new Board('#board',this);
    this.player = new Player(this);
    this.currentPlayer;
    this.counter;
    this.victoryLoop();
  }

  	victoryLoop(){

  	
  	}

  /*$('#player1-btn').click(function(){
  // lägg formulärets värde i name
  let name = ($('#player1').val());
  console.log(name + 'först')
  // om inget är ifyllt, return
  if(name === ''){
    return;
  }

    if($('#exampleRadios1').is(':checked')) { 
      let player1;
      player1 = new Human('app', name, 'red');
  }
  else{
    let player1;
      player1 = new Computer('app', name, 'red');
    }
});


$('#player2-btn').click(function(){
  // lägg formulärets värde i name
  let name = ($('#player2').val());
  console.log(name + 'först')
  // om inget är ifyllt, return
  if(name === ''){
    return;
  }

    if($('#exampleRadios3').is(':checked')) { 
      let player2;
      player2 = new Human('app', name, 'yellow');
  }
  else{
    let player1;
      player2 = new Computer('app', name, 'yellow');
    }
});*/



}