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
		this.hoverBrick();
		this.scale();
		this.dropBrick();
	}

	scale(){
		let boardW = 798;
		let boardH = 909;
		let w = $(window).width();
		let h = $(window).height(); 
		h -= $('header').outerHeight() + $('footer').outerHeight();
		w -= + 20 * 2; 
		let wScale = w / boardW; 
		let hScale = h / boardH;
		let scaling = Math.min(wScale, hScale);
		$('#board').css('transform', `scale(${scaling})`).show();
		$('.board-holder').width(boardW * scaling).height(boardH * scaling);
	}

	createBoard(){
		//transparent row/col for hover brick
		let hoverRow = $('<div>').addClass('hover-brick-row');
		for(let j = 0; j < 7; j++){
			let hoverCol = $('<div>').addClass('hover-brick-col');
			hoverCol.attr('data-colNr',j).attr('data-rowNr', 0);
			let circles = $('<div>').addClass('circle');
			hoverCol.append(circles);
			$(hoverRow).append(hoverCol);
		}
		$(this.board).append(hoverRow);
		// visible row/col
		for(let i = 0; i < 6; i++){
			let row = $('<div>').addClass('board-row');
			for(let j = 0; j < 7; j++){
				let col = $('<div>').addClass('board-col noBrick');
				col.attr('data-colNr',j).attr('data-rowNr', i);
				let circles = $('<div>').addClass('circle');
				col.append(circles);
				$(row).append(col);
			}
			$(this.board).append(row);
		}
	}

	hoverBrick(){
		$(this.board).on('mouseover', '.board-col', function(){
			let colNumber = $(this).data('colnr');
			$(`.hover-brick-col[data-colNr='${colNumber}']`).children().addClass('red');
		});
		$(this.board).on('mouseleave', '.board-col', function(){
			let colNumber = $(this).data('colnr');
			$(`.hover-brick-col[data-colNr='${colNumber}']`).children().removeClass('red');
		});
	}

	dropBrick(){
		const that = this;
		$(this.board).on('click', '.board-col', function(){
			let colNumber = $(this).data('colnr');
			let emptyCols = $(`.noBrick[data-colNr='${colNumber}']`);
			for(let i = emptyCols.length - 1; i>= 0; i--){
				if (emptyCols.hasClass('noBrick')) {
					$(emptyCols[i]).children().addClass('red');
					$(emptyCols[i]).removeClass('noBrick');
					let rowNumber = $(emptyCols[i]).data('rownr');
					let colNumber = $(emptyCols[i]).data('colnr');
					that.arrBoard[rowNumber][colNumber] = 1;
					return;
				}
				else {return null;}
			}
		});
	}
}