//todo: build controllers
let current;
let desired;

function renderPieceController(piece, game) {
  const $piece = document.createElement("span");
  $piece.setAttribute("class", "piece");
  $piece.setAttribute("draggable", true);

  $piece.addEventListener("dragend", function() {
    piece.advance(current, desired);
    renderView(game);
  });

  $piece.textContent = piece.side;
  return $piece;
}

function renderSquareController(sq) {
  const $sq = document.createElement("td");
  $sq.setAttribute("class", "space");
  $sq.setAttribute("row", sq.row);
  $sq.setAttribute("col", sq.col);

  $sq.addEventListener("dragstart", e => {
    current = sq;
  });

  $sq.addEventListener("dragover", e => {
    e.preventDefault();
  });

  $sq.addEventListener("drop", e => {
    desired = sq;
  });

  return $sq;
}
