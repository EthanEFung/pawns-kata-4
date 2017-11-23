class Game {
  constructor(n) {
    this.board = this.renderBoard(n);
    this.winner = null;
  }
  renderBoard(n) {
    const board = [];
    for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j < n; j++) {
        let square = {
          piece: null,
          row: i,
          col: j
        };
        row.push(square);
      }
      board.push(row);
    }
    return board;
  }
  start() {
    const topRow = this.board[0];
    const botRow = this.board[this.board.length - 1];

    topRow.forEach(
      (sq, i) => (sq.piece = new Pawn("black", { row: 0, col: i }))
    );
    botRow.forEach(
      (sq, i) =>
        (sq.piece = new Pawn("white", { row: this.board.length - 1, col: i }))
    );
  }
  end() {}
}

class Pawn {
  constructor(side, { row, col }) {
    this.side = side;
    this.row = row;
    this.col = col;
  }
  advance(currSq, desiredSq) {
    if (
      (sqIsOneRowAway(currSq, desiredSq, this.side) &&
        sqIsVacant(desiredSq) &&
        columnsAreTheSame(currSq, desiredSq)) ||
      (sqIsOneRowAway(currSq, desiredSq, this.side) &&
        sqIsOneColAway(currSq, desiredSq) &&
        sqHasOpposition(desiredSq, this.side))
    ) {
      this.row = desiredSq.row;
      this.col = desiredSq.col;
      desiredSq.piece = this;
      currSq.piece = null;
    }
  }
  capture(currSq, desiredSq) {}
}

function sqIsVacant(desiredSq) {
  return desiredSq.piece === null;
}

function sqIsOneRowAway(currSq, desiredSq, side) {
  if (side === "white") return currSq.row === desiredSq.row + 1;
  return currSq.row === desiredSq.row - 1;
}

function columnsAreTheSame(currSq, desiredSq) {
  return currSq.col === desiredSq.col;
}

function sqIsOneColAway(currSq, desiredSq) {
  return currSq.col === desiredSq.col + 1 || currSq.col === desiredSq.col - 1;
}
function sqHasOpposition(desiredSq, currSide) {
  const opposition = currSide === "white" ? "black" : "white";
  return desiredSq.piece.side === opposition;
}

class Player {}

// module.exports = {
//   Game,
//   Pawn,
//   Player,
//   sqIsOneRowAway,
//   columnsAreTheSame,
//   sqIsOneColAway
// };
