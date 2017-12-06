let theRules = $(`
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title" id="exampleModalLabel">Spelregler</h2>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              4 i rad är ett spel för två spelare. Brädet består av 7 kolumner med 6 horisontella rader. Varje spelare väljer först färg och turas sedan om att släppa sina färgade brickor längst upp i valfri kolumn. Syftet är att skapa en rad med 4 av sin färg horisontellt, vertikalt eller diagonalt. Om alla kolumner är fyllda slutar spelet oavgjort.
              <hr>
              <ul class="youtubes pull-left">
                <li> Länkar till filmer</li>
                <li><a href="https://www.youtube.com/watch?v=H3FYRM9a0i4">Se hur man spelar</a></li>
                <li><a href="https://www.youtube.com/watch?v=ONKFwqnusbI">Gör ditt eget bräde (svår)</a></li>
                <li><a href="https://www.youtube.com/watch?v=yDWPi1pZ0Po">Mer statistik än du någonsin vill veta</a></li>
                <li><a href="https://www.youtube.com/watch?v=rqkxmXBY7yQ">Om motståndaren är för svår, fuska</a></li>
              </ul>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Dölj</button>
            </div>
          </div>
        </div>
      </div>
  `)


$('.nav-modal').click(function(e){
  $('main').append(theRules);
});

