

//let game = new Board('#board');

//$(window).resize(game.scale);



$('#player1-btn').click(function(){
	// lägg formulärets värde i name
  let name = ($('#player1').val());
  // om inget är ifyllt, return
  if(name === ''){
    return;
  };
  // avläs värde i dropdown, måste sätta det på selectorn istället för bara ett värde, annars blir det alltid 1 här...
  let value = $('#player1opt1').val();
  let player1;
  if(){
  player1 = new Human('app', name, 'red');
  }
  else{
  	player1 = new Computer('app', name, 'red');
  }
  alert(player1.name + value);
})


$('#player2-btn').click(function(){
	// lägg formulärets värde i name
  let name2 = ($('#player2').val());
  // om inget är ifyllt, return
  if(name2 === ''){
    return;
  };
  let player2 = new Human('app', name2, 'yellow');
})