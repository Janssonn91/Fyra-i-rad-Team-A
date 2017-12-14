class Game {

  constructor(){
    this.board = new Board('#board',this);
    this.player = new Player(this);
    this.currentPlayer;
    this.counter;
    this.createPlayer(name);
  }

  	victoryLoop(){
      let b = this.board.arrBoard , winner, emptySlots = false;
      for(let row = 0; row <= 5; row++){
        for(let col = 0; col <= 6; col++){
          for(let p of ["red", "yellow"]){
            if(
              (row <= 2 && b[row][col] == p && b[row+1][col] == p && b[row+2][col] == p && p && b[row+3][col] == p) || 
              (col <= 3 && b[row][col] == p && b[row][col+1] == p && b[row][col+2] == p && p && b[row][col+3] == p)  ||
              (col <= 3 && row <= 2 && b[row][col] == p && b[row+1][col+1] == p && b[row+2][col+2] == p && p && b[row+3][col+3] == p)  ||
              (col >= 3 && row <= 2 && b[row][col] == p && b[row+1][col-1] == p && b[row+2][col-2] == p && p && b[row+3][col-3] == p) 
            ){
              winner = player;
            }
          } // player
          emptySlots = emptySlots || b[row][col] === 0;
        }// col
      }// row
      /*
        Om det finns en vinnare retuneras 'winner'. 
        Om det inte finns en vinnare tittar den om det inte finns några lediga columner kvar & retunerar då 'draw'.
        Annars retuneras false alltså att det inte finns en vinnare och att det finns fortfarande lediga columner man kan lägga brickor i. 
      */
      return winner ? winner : (!emptySlots ? 'draw' : false);
    }// victoryLoop

  /*$('#player1-btn').click(function(){
  // lägg formulärets värde i name
  let name = ($('#player1').val());
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

createPlayer(name){
if(name === ''){
    return;
  };

  if($('#exampleRadios1').is(':checked')) { 
    let player1;
    player1 = new Human('app', name, 'red');
  }
  else{
    let player1;
    player1 = new Computer('app', name, 'red');
    }

  if($('#exampleRadios3').is(':checked')) { 
    let player2;
    player2 = new Human('app', name, 'yellow');
      if(player2.name){
    alert(player2.name + ' är human ' + player2.color);
    }
  }
  else{
    let player2;
    player2 = new Computer('app', name, 'yellow');
    alert(player2.name + ' är dator ' + player2.color);
    }
};

}


