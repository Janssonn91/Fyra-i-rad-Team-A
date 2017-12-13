

let game = new Board('#board');

$(window).resize(game.scale);



$('#player1-btn').click(function(){
	// lägg formulärets värde i name
  let name = ($('#player1').val());
  // om inget är ifyllt, return
  if(name === ''){
    return;
  };
  alert(name);
  let player1 = new Human(name, name, name);
  alert(player1);
})