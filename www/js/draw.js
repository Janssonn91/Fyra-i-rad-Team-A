// class Draw{
//   constructor(game){
    let draw = $(`
      <div class="modal fade" id="draw" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h2 class="modal-title text-danger" id="exampleModalLabel">Draw</h2>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body mx-4">
               
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Spela igen</button>
              </div>
            </div>
          </div>
        </div>
      `)
    if(window.location.pathname == '/spela.html'){
      $('main').append(draw);
    };
//   }
// }