class Game {
  constructor(){
    this.board = new Board('#board',this);
    if(localStorage.playerInput){
      this.createPlayerStep2();
      console.log(this.player1);
      console.log(this.player2);
    }
    else {
      this.createPlayer();
    }
    this.counter = 0;
    this.highscore = new Highscore(this);
    this.highscore.createList(this.highscore.list);
    // this.highscore.saveList(this.highscore.list);
    /*this.save();*/
  }

	victoryLoop(){
    let b = this.board.arrBoard , winner, emptySlots = false;
    for(let row = 0; row <= 5; row++){
      for(let col = 0; col <= 6; col++){
        for(let p of ["red", "yellow"]){
          if(
            // Vertical
            (row <= 2 && b[row][col] == p && b[row+1][col] == p && b[row+2][col] == p && p && b[row+3][col] == p) || 
            // Horizontel
            (col <= 3 && b[row][col] == p && b[row][col+1] == p && b[row][col+2] == p && p && b[row][col+3] == p)  ||
            // Diagonal \
            (col <= 3 && row <= 2 && b[row][col] == p && b[row+1][col+1] == p && b[row+2][col+2] == p && p && b[row+3][col+3] == p)  ||
            // Diagonal /
            (col >= 3 && row <= 2 && b[row][col] == p && b[row+1][col-1] == p && b[row+2][col-2] == p && p && b[row+3][col-3] == p) 
          ){
            winner = this.currentPlayer.name;
            console.log(winner);
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



  createPlayer(){
    $(document).on('click', '.button', function(){
      let input1 = $('#input-1').val();
      let input2 = $('#input-2').val();
      let radio1 = $('#human-1').is(':checked');
      let radio3 = $('#human-2').is(':checked');

      localStorage.playerInput = JSON.stringify({
        input1: input1,
        input2: input2,
        radio1: radio1,
        radio3: radio3
      });
      // input kommer bli true även om man inte skirver något och bara gör mellanslag
      // genom att lägga till '.(replace(/^\s+|\s+$/g, "")' letar den efter mellanslag
      // och byter ut det mot inget mellanslag. 
      // /^\s+|\s+$/g betyder ^ = början av en stärng, \s+ = leta efter en eller fler mellanslag 
      // | = or, \s+$ = leka efter en eller fler mellanslag på slutet av strängen.
     if(input1.replace(/^\s+|\s+$/g, "") && input2.replace(/^\s+|\s+$/g, "")){
      location.href = '/spela.html';
      }
    });
  }

  createPlayerStep2(){
   let x = JSON.parse(localStorage.playerInput);
   delete localStorage.playerInput;
   if(x.radio1){
      this.player1 = new Player(this,x.input1,'red');
    }else{
      this.player1 = new Computer(this,x.input1,'red');
    }
    if(x.radio3){
      this.player2 = new Player(this,x.input2,'yellow');
    }else{
      this.player2 = new Computer(this,x.input2,'yellow');
    }
    $('.player1Name').text(this.player1.name);
    $('.player2Name').text(this.player2.name);
    this.currentPlayer = this.player1;
    this.currentPlayer.dropBrick();
  }
}



