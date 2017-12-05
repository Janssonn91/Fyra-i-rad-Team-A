class Board{
	constructor(selector){
		this.board = selector;
		this.arrBoard = [ [0,0,0,0,0,0,0],
						  [0,0,0,0,0,0,0],
						  [0,0,0,0,0,0,0],
						  [0,0,0,0,0,0,0],
						  [0,0,0,0,0,0,0],
						  [0,0,0,0,0,0,0] ];
		this.createBoard();
		this.dropBrick();
	}
	createBoard(){
		for(let i = 0; i < 6; i++){
			let row = $('<div>').addClass('row');
			for(let j = 0; j < 7; j++){
				let col = $('<div>').addClass('col').addClass('noBrick');
				col.attr('data-colNr',j).attr('data-rowNr', i);
				let circles = $('<div>').addClass('circle');
				col.append(circles);
				$(row).append(col);
			}
			$(this.board).append(row);
		}
	}

	dropBrick(){
		const that = this;
		$(this.board).on('click', '.col', function(){
			let colNumber = $(this).data('colnr');
			let emptyCols = $(`.noBrick[data-colNr='${colNumber}']`);
			for(let i = emptyCols.length - 1; i>= 0; i--){
				if (emptyCols.hasClass('noBrick')) {
					$(emptyCols[i]).children().addClass('red');
					$(emptyCols[i]).removeClass('noBrick');
					let rowNumber = $(emptyCols[i]).data('rownr');
					let colNumber = $(emptyCols[i]).data('colnr');
					that.arrBoard[rowNumber][colNumber] = 1;
					console.log(that.arrBoard);
					return;
				}
				else {return null;}
			}
		});
	}
}