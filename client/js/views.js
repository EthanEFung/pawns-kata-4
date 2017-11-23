//todo: build views
function renderView(game) {
  let $board;
  if (document.getElementById("board")) {
    $board = document.getElementById("board");
    let count = 0;
    while ($board.firstChild) {
      $board.removeChild($board.firstChild);
    }
  } else {
    $board = document.createElement("tbody");
    $board.setAttribute("id", "board");
  }
  game.board.forEach(row => {
    const $row = document.createElement("tr");
    $row.setAttribute("class", "row");

    row.forEach(sq => {
      const $sq = renderSquareController(sq);
      if (sq.piece) {
        const $piece = renderPieceController(sq.piece, game);
        $sq.appendChild($piece);
      }
      $row.appendChild($sq);
    });
    $board.appendChild($row);
  });

  document.body.appendChild($board);
}
window.onload = () => {
  const game = new Game(5);
  game.start();
  renderView(game);
};
