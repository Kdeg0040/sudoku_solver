const Board = require('../src/sudokuSolver');

describe('board', () => {
  it('can draw a 9x9 grid', () => {
    const board = new Board();
    board.makeBlank();
    expect(board.grid.length).toEqual(9);
    expect(board.grid[0].length).toEqual(9);
    expect(board.grid[0][0]).toBe(0);
  });

  it('can make a blank board', () => {
    const board = new Board();
    expect(board.blanks).toEqual([]);
    board.makeBlank();
    expect(board.blanks.length).toEqual(81);
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
    board.solve();
    expect(board.grid).toEqual(expectedSolution);    
  });

  it('displays alert if no solution found', () => {
    const impossibleBoard = 
    '123456789745823610000000000000000000000000000000000000000000000000000000000000000';
    board = new Board(impossibleBoard);
    board.makeGrid(board.input);
    expect(() => {
      board.solve();
    }).toThrow('No solution found')
  });

  it('can clear cells from a complete board', () => {
    board = new Board();
    remainingCells = 25;
    board.grid = [
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
    expect(board.blanks.length).toEqual(0);
    board.clearCells(remainingCells);
    expect(board.blanks.length).toBeGreaterThan(0);
    expect(board.blanks.length == 55 || board.blanks.length == 56).toBe(true);
  });

  it('can clear cells symmetrically from centre of board', () => {
    board = new Board();
    remainingCells = 25;
    board.grid = [
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
    expect(board.blanks.length).toEqual(0);
    board.clearSymmetrically(4, 5);
    expect(board.blanks.length).toEqual(2);
    expect(board.grid[4][5]).toEqual(0);
    expect(board.grid[4][3]).toEqual(0);
    board.clearSymmetrically(5, 5);
    expect(board.grid[5][5]).toEqual(0);
    expect(board.grid[3][3]).toEqual(0);
    board.clearSymmetrically(7, 1);
    expect(board.grid[7][1]).toEqual(0);
    expect(board.grid[1][7]).toEqual(0);
    board.clearSymmetrically(2, 1);
    expect(board.grid[2][1]).toEqual(0);
    expect(board.grid[6][7]).toEqual(0);
  });

  it('can seed an empty board', () => {
    const board = new Board();
    board.makeBlank();
    board.generate(9);
    board.findBlanks();
    expect(board.blanks.length).toEqual(72);
  })
});
