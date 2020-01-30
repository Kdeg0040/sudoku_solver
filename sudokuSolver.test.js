const Board = require('./sudokuSolver');

describe('board', () => {
  it('can be initialized', () => {
    const board = new Board();
    expect(board).toBeDefined();
  });

  it('can allow input of known numbers', () => {
    const input = '000005021000000049931000500065030000400517002000040750007000983590000000320700000'
    const board = new Board(input);
    expect(board.input.length).toBe(81);
  });

  it('can draw a 9x9 grid', () => {
    const blank = '000000000000000000000000000000000000000000000000000000000000000000000000000000000'
    const board = new Board(blank);
    board.makeGrid(blank);
    expect(board.grid.length).toBe(9);
  });
});
