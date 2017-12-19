let gameOver = $(`
    <div class="modal fade" id="hidden-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title text-danger" id="exampleModalLabel">Spelregler</h2>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body mx-4">
             
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Stäng</button>
            </div>
          </div>
        </div>
      </div>
  `)

// $('winnder-modal').click(function(e){
  if(window.location.pathname == '/spela.html'){
    $('main').append(gameOver);
  };
// });