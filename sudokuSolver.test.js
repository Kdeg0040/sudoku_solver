const Board = require('./sudokuSolver');

describe('board', () => {
  it('can be initialized', () => {
    const board = new Board();
    expect(board).toBeDefined();
  });

  it('can allow input of known numbers', () => {
    const input = '000005021000000049931000500065030000400517002000040750007000983590000000320700000'
    const board = new Board(input);
    expect(board.input.length).toEqual(81);
  });

  it('can draw a 9x9 grid', () => {
    const blank = '000000000000000000000000000000000000000000000000000000000000000000000000000000000'
    const board = new Board(blank);
    board.makeGrid(blank);
    expect(board.grid.length).toEqual(9);
  });

  it('can identify position of blank cells', () => {
    const board = new Board();
    board.grid = [
      [0, 2, 3, 4, 5, 6, 7, 8, 9],
      [4, 0, 6, 7, 8, 9, 1, 2, 3],
      [7, 8, 0, 1, 2, 3, 4, 5, 6],
      [2, 3, 4, 0, 6, 7, 8, 9, 1],
      [5, 6, 7, 8, 0, 1, 2, 3, 4],
      [8, 9, 1, 2, 3, 0, 5, 6, 7],
      [3, 4, 5, 6, 7, 8, 0, 1, 2],
      [6, 7, 8, 9, 1, 2, 3, 0, 5],
      [9, 1, 2, 3, 4, 5, 6, 7, 0]
    ]
    board.findBlanks();
    expect(board.blanks).toEqual([[0,0], [1,1], [2,2], [3,3], [4,4], [5,5], [6,6], [7,7], [8,8]]);
  });
});
