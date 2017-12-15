class Highscore{
	constructor(game){
		this.placering;
		this.game = game;
		this.list = [
			{
				name: "Anna", 
				score: 4
			},
			{
				name: "Anna", 
				score: 4
			},
			{
				name: "Anna", 
				score: 4
			},
			{
				name: "Anna", 
				score: 4
			},
			{
				name: "Anna", 
				score: 4
			}
		];
	}

	createList(highscore){
		for (let player of highscore){
			$(".highscore-list").append(`
          <li class="list-group-item no-border"><span class="trophy px-3"></span>${player.name}<span class="float-right mr-5 pr-5">${player.score}</span></li>
        `);
      } //for loop 
		} //createlist
	renderList(){

	} // Render List
} // class Highscore
