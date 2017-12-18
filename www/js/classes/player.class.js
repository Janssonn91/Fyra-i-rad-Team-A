class Player {
 
  constructor(game, name, color){
    this.game = game;
    this.name = name;
    this.color = color;
    this.hoverBrick();
  }

  togglePlayer(){
		if(this.game.currentPlayer == this.game.player1){
			this.game.currentPlayer = this.game.player2;
			$('.player-1').removeClass('active-player');
			$('.player-2').addClass('active-player');							
		}
		else{
			this.game.currentPlayer = this.game.player1;
			$('.player-2').removeClass('active-player');
			$('.player-1').addClass('active-player');
		}
	}
 
  hoverBrick(){	
		const that = this;
		$(this.game.board.boardId).on('mouseover', '.board-col', function(){
			let colNumber = $(this).data('colnr');
			$(`.hover-brick-col[data-colNr='${colNumber}']`).children().addClass(that.game.currentPlayer.color);
		});
		$(this.game.board.boardId).on('mouseleave', '.board-col', function(){
			let colNumber = $(this).data('colnr');
			$(`.hover-brick-col[data-colNr='${colNumber}']`).children().removeClass('red yellow');
		});
	}

	dropBrick(){
		const that = this;
		$(this.game.board.boardId).on('click', '.board-col', function(){
			let colNumber = $(this).data('colnr');
			let emptyCols = $(`.noBrick[data-colNr='${colNumber}']`);
			for(let i = emptyCols.length - 1; i>= 0; i--){
				if (emptyCols.hasClass('noBrick')) {
					$(emptyCols[i]).children().addClass(that.game.currentPlayer.color);
					// lägger på önskad effekt på sista brickan
					$(emptyCols[i]).children().addClass('blinking');
					// timer räknar till 2sec och sedan tar bort classen blinking
					setTimeout(function() {
				       $(emptyCols[i]).children().removeClass('blinking');
				   	}, 1000);
					$(emptyCols[i]).removeClass('noBrick');
					let rowNumber = $(emptyCols[i]).data('rownr');
					let colNumber = $(emptyCols[i]).data('colnr');
					that.game.board.arrBoard[rowNumber][colNumber] = that.game.currentPlayer.color;
					that.game.victoryLoop();
					// rader för countern
					game.counter++;
					let roundNumber = Math.ceil(game.counter/2);
					$('#roundNumber').text(roundNumber);
					// slut rader för countern
					that.togglePlayer();
					$(`.hover-brick-col[data-colNr='${colNumber}']`)
					  .children().removeClass('red yellow').addClass(that.game.currentPlayer.color);
					return;
				}
				else {return null;}
			}
		});
	}
}