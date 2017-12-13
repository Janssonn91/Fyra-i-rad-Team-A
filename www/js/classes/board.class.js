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
		this.currentPlayer = 'red';
	}

	scale(){
		let boardW;
		let boardH;
		if($(window).width() <= 768){
			boardW = 798;
			boardH = 985;
		}else{
			boardW = 1148;
			boardH = 798;
		}
		let w = $(window).width();
		let h = $(window).height(); 
		if($(window).width() > 1024){
	      h -= $('.board-holder').offset().top + 10;
	    }else{
	      h -= $('.board-holder').offset().top + 20;
	    }

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
		const that = this;
		$(this.board).on('mouseover', '.board-col', function(){
			let colNumber = $(this).data('colnr');
			$(`.hover-brick-col[data-colNr='${colNumber}']`).children().addClass(that.currentPlayer);
		});
		$(this.board).on('mouseleave', '.board-col', function(){
			let colNumber = $(this).data('colnr');
			$(`.hover-brick-col[data-colNr='${colNumber}']`).children().removeClass('red yellow');
		});
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
						$('.player-1').removeClass('active-player');
						$('.player-2').addClass('active-player');							
					}
					else{
						that.currentPlayer = 'red';
						$('.player-2').removeClass('active-player');
						$('.player-1').addClass('active-player');
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