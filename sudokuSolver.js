function Board(input) {
  this.input = input;
  this.grid = null;
  this.blanks = [];
}

Board.prototype.makeGrid = function(input) {
  rows = input.match(/.{1,9}/g);
  splitToInt = rows.map( x => x.split('').map(Number));
  this.grid = splitToInt;
}

Board.prototype.findBlanks = function() {
  for (let row = 0; row <= 8; row++) {
    for (let col = 0; col <= 8; col++) {
      if (this.grid[row][col] == 0) {
        this.blanks.push([row,col])
      }
    }
  }
}

module.exports = Board;