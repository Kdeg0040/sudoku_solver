const Board = require('./sudokuSolver');

describe('board', () => {
  it('can be initialized', () => {
    const board = new Board();
    expect(board).toBeDefined();
  });
});
