    

    let draw = $(`
      <div class="modal fade" id="draw" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title text-danger">Oavgjort</h2>
            </div>
            <div class="modal-body mx-4">
              <p>Ni har spelat oavgjort!</p>
              <p>Alla brickor har tagit slut och brädan är full! Försök igen.</p>
              <p>Spela igen? Tryck på knappen.
            </div>
            <div class="modal-footer">
              <a href="/Namn.html"><button type="button" class="btn btn-danger" data-dismiss="modal">Spela igen</button></a>
            </div>
          </div>
        </div>
      </div>
      `)
    if(window.location.pathname == '/spela.html'){
      $('main').append(draw);
    };