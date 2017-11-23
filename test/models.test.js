const {
  Game,
  Pawn,
  Player,
  sqIsOneRowAway,
  columnsAreTheSame,
  sqIsOneColAway
} = require("../client/js/models");

describe("Game", function() {
  it("should have a render board function", function() {
    const test = new Game(3);
    expect(test.board.length).toEqual(3);
  });

  it("should have a board given an n", function() {
    const test = new Game(3);

    const expected = [
      [
        { piece: null, row: 0, col: 0 },
        { piece: null, row: 0, col: 1 },
        { piece: null, row: 0, col: 2 }
      ],
      [
        { piece: null, row: 1, col: 0 },
        { piece: null, row: 1, col: 1 },
        { piece: null, row: 1, col: 2 }
      ],
      [
        { piece: null, row: 2, col: 0 },
        { piece: null, row: 2, col: 1 },
        { piece: null, row: 2, col: 2 }
      ]
    ];
    expect(test.board).toEqual(expected);
  });

  it("should populate the first and last rows when the game is started", function() {
    const test = new Game(3);
    test.start();

    const expected = [
      [
        { piece: new Pawn("black", { row: 0, col: 0 }), row: 0, col: 0 },
        { piece: new Pawn("black", { row: 0, col: 1 }), row: 0, col: 1 },
        { piece: new Pawn("black", { row: 0, col: 2 }), row: 0, col: 2 }
      ],
      [
        { piece: null, row: 1, col: 0 },
        { piece: null, row: 1, col: 1 },
        { piece: null, row: 1, col: 2 }
      ],
      [
        { piece: new Pawn("white", { row: 2, col: 0 }), row: 2, col: 0 },
        { piece: new Pawn("white", { row: 2, col: 1 }), row: 2, col: 1 },
        { piece: new Pawn("white", { row: 2, col: 2 }), row: 2, col: 2 }
      ]
    ];
    expect(test.board).toEqual(expected);
  });
  it("should advance to the next square if the row is one away for white", function() {
    const test = new Game(3);
    test.start();

    const pawn = test.board[2][0].piece;

    pawn.advance(test.board[2][0], test.board[1][0]);
    const expected = [
      [
        {
          piece: new Pawn("black", {
            row: 0,
            col: 0
          }),
          row: 0,
          col: 0
        },
        {
          piece: new Pawn("black", {
            row: 0,
            col: 1
          }),
          row: 0,
          col: 1
        },
        {
          piece: new Pawn("black", {
            row: 0,
            col: 2
          }),
          row: 0,
          col: 2
        }
      ],
      [
        {
          piece: new Pawn("white", {
            row: 1,
            col: 0
          }),
          row: 1,
          col: 0
        },
        { piece: null, row: 1, col: 1 },
        { piece: null, row: 1, col: 2 }
      ],
      [
        { piece: null, row: 2, col: 0 },
        {
          piece: new Pawn("white", {
            row: 2,
            col: 1
          }),
          row: 2,
          col: 1
        },
        {
          piece: new Pawn("white", {
            row: 2,
            col: 2
          }),
          row: 2,
          col: 2
        }
      ]
    ];
  });

  it("should advance to the next square if the row is one away for black", function() {
    const test = new Game(3);
    test.start();

    const pawn = test.board[0][0].piece;

    pawn.advance(test.board[0][0], test.board[1][0]);
    const expected = [
      [
        {
          piece: null,
          row: 0,
          col: 0
        },
        {
          piece: new Pawn("black", {
            row: 0,
            col: 1
          }),
          row: 0,
          col: 1
        },
        {
          piece: new Pawn("black", {
            row: 0,
            col: 2
          }),
          row: 0,
          col: 2
        }
      ],
      [
        {
          piece: new Pawn("black", {
            row: 1,
            col: 0
          }),
          row: 1,
          col: 0
        },
        { piece: null, row: 1, col: 1 },
        { piece: null, row: 1, col: 2 }
      ],
      [
        { piece: new Pawn("white", { row: 2, col: 0 }), row: 2, col: 0 },
        {
          piece: new Pawn("white", {
            row: 2,
            col: 1
          }),
          row: 2,
          col: 1
        },
        {
          piece: new Pawn("white", {
            row: 2,
            col: 2
          }),
          row: 2,
          col: 2
        }
      ]
    ];
  });

  it("should capture on a the primary diaganol ", function() {
    const test = new Game(2);
    test.start();

    const pawn = test.board[0][0].piece;

    pawn.capture(test.board[0][0], test.board[1][1]);

    const expected = [
      [
        { piece: null, row: 0, col: 0 },
        { piece: { side: "black", row: 0, col: 1 }, row: 0, col: 1 }
      ],
      [
        { piece: { side: "white", row: 1, col: 0 }, row: 1, col: 0 },
        { piece: { side: "black", row: 1, col: 1 }, row: 1, col: 1 }
      ]
    ];
    expect(test.board).toEqual(expected);
  });
});

describe("sqIsOneRowAway", function() {
  it("should return false if the row is not one away", function() {});
});
