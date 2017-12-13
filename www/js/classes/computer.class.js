class Computer extends Player{
	constructor(game, name, color){
	super(game, name, color);
	this.dropBrick();
	}

	dropBrick(){
		const that = this;
		$(this.board).on('click', '.board-col', function(){
			let colNumber = $(this).data('colnr');
			let emptyCols = $(`.noBrick[data-colNr='${colNumber}']`);
			for(let i = emptyCols.length - 1; i>= 0; i--){
				if (emptyCols.hasClass('noBrick')) {
					$(emptyCols[i]).children().addClass(that.currentPlayer);

					// testrad, lägger på önskad effekt på sista brickan
					$(emptyCols[i]).children().addClass('green');
					
					$(emptyCols[i]).removeClass('noBrick');
					let rowNumber = $(emptyCols[i]).data('rownr');
					let colNumber = $(emptyCols[i]).data('colnr');
					that.arrBoard[rowNumber][colNumber] = 1;
					if(that.currentPlayer == 'red'){
						that.currentPlayer = 'yellow';
						$('.display-player h4').text('Spelare: Martin');
						$('.player-brick').css("background-color", "yellow");						
					}
					else{
						that.currentPlayer = 'red';
						$('.display-player h4').text('Spelare: Anna');
						$('.player-brick').css("background-color", "red");
					}
					$(`.hover-brick-col[data-colNr='${colNumber}']`)
					  .children().removeClass('red yellow').addClass(that.currentPlayer);
					return;
				}
				else {return null;}
			}
		});
	}

}