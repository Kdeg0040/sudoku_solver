const Board = require('../src/sudokuSolver');

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


  it('can check if a value is valid on a given row, column and sub grid', () => {
    const board = new Board();
    board.grid = [
      [0, 0, 0, 0, 0, 5, 0, 2, 1],
      [0, 0, 0, 0, 0, 0, 0, 4, 9],
      [9, 3, 1, 0, 0, 0, 5, 0, 0],
      [0, 6, 5, 0, 3, 0, 0, 0, 0],
      [4, 0, 0, 5, 1, 7, 0, 0, 2],
      [0, 0, 0, 0, 4, 0, 7, 5, 0],
      [0, 0, 7, 0, 0, 0, 9, 8, 3],
      [5, 9, 0, 0, 0, 0, 0, 0, 0],
      [3, 2, 0, 7, 0, 0, 0, 0, 0]
    ]
    expect(board.validRow(0, 1)).toBe(false);
    expect(board.validRow(0, 3)).toBe(true);
    expect(board.validColumn(0, 9)).toBe(false);
    expect(board.validColumn(0, 1)).toBe(true);
    expect(board.validSubGrid(0, 0, 1)).toBe(false);
    expect(board.validSubGrid(3, 2, 9)).toBe(true);
    expect(board.isValid(1, 1, 2)).toBe(false);
    expect(board.isValid(5, 5, 1)).toBe(false);
    expect(board.isValid(7, 7, 1)).toBe(true);
  });

  it('can solve an incomplete board', () => {
    const board = new Board();
    board.grid = [
      [0, 0, 0, 0, 0, 5, 0, 2, 1],
      [0, 0, 0, 0, 0, 0, 0, 4, 9],
      [9, 3, 1, 0, 0, 0, 5, 0, 0],
      [0, 6, 5, 0, 3, 0, 0, 0, 0],
      [4, 0, 0, 5, 1, 7, 0, 0, 2],
      [0, 0, 0, 0, 4, 0, 7, 5, 0],
      [0, 0, 7, 0, 0, 0, 9, 8, 3],
      [5, 9, 0, 0, 0, 0, 0, 0, 0],
      [3, 2, 0, 7, 0, 0, 0, 0, 0]
    ]
    let expectedSolution = [
      [8, 7, 4, 9, 6, 5, 3, 2, 1],
      [6, 5, 2, 1, 7, 3, 8, 4, 9],
      [9, 3, 1, 4, 2, 8, 5, 7, 6],
      [7, 6, 5, 8, 3, 2, 1, 9, 4],
      [4, 8, 9, 5, 1, 7, 6, 3, 2],
      [2, 1, 3, 6, 4, 9, 7, 5, 8],
      [1, 4, 7, 2, 5, 6, 9, 8, 3],
      [5, 9, 6, 3, 8, 4, 2, 1, 7],
      [3, 2, 8, 7, 9, 1, 4, 6, 5]
    ]
    board.findBlanks();
    board.solve();
    expect(board.grid).toEqual(expectedSolution);    
  });
});