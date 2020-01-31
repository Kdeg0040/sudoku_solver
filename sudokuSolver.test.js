const Board = require('./sudokuSolver');

describe('board', () => {
  it('can draw a 9x9 grid', () => {
    const blank = 
    '000000000000000000000000000000000000000000000000000000000000000000000000000000000'
    const board = new Board(blank);
    board.makeGrid(blank);
    expect(board.grid.length).toEqual(9);
    expect(board.grid[0].length).toEqual(9);
    expect(board.grid[0][0]).toBe(0);
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
    expect(board.blanks.length).toEqual(9);
  });
});
