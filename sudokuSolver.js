function Board(input) {
  this.input = input;
  this.grid = null;
}

Board.prototype.makeGrid = function(input) {
  rows = input.match(/.{1,9}/g);
  splitToInt = rows.map( x => x.split('').map(Number));
  this.grid = splitToInt;
}


module.exports = Board;