class Highscore{
	constructor(game){
		this.placering;
		this.game = game;
		this.list = [
			{
				name: "Martin", 
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
          <li class="list-group-item no-border"><span class="trophy px-3"></span>${player.name}<span class="float-right mr-1 mr-md-5 pr-5">${player.score}</span></li>
        `);
      } //for loop 
	} //createlist
	
}
		// JSON._classes(Highscore);
		// JSON._save('highscore.json', list).then(function(){
		//   console.log('Saved!');
		// });

		// JSON._load('highscore.json').then(function(players){
		//   	console.log(players);
		//  });


// todoLista = data.todo;
  	// doneTodo = data.done;