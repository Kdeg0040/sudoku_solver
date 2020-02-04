function Board(input) {
  this.input = input;
  this.grid;
  this.blanks = [];
}

Board.prototype.makeGrid = function(input) {
  rows = input.match(/.{1,9}/g);
  splitToInt = rows.map( x => x.split('').map(Number));
  this.grid = splitToInt;
}

Board.prototype.findBlanks = function() {
  this.blanks = [];
  for (let x = 0; x <= 8; x++) {
    for (let y = 0; y <= 8; y++) {
      if (this.grid[x][y] == 0) {
        this.blanks.push([x,y])
      }
    }
  }
}

Board.prototype.clearCells = function(nos_rem) {
  for (let i = 0; i < (81 - nos_rem);) {
    row = Math.floor(Math.random() * 9);
    col = Math.floor(Math.random() * 9);
    cell = this.grid[row][col]
    if (!this.grid[row][col] == 0) {
      this.grid[row][col] = 0;
      this.findBlanks();
      i++;    
    }
  }
}

Board.prototype.solve = function() {
  const maxValue = 9;
  for (let i = 0; i < this.blanks.length;) {
    row = this.blanks[i][0];
    col = this.blanks[i][1];
    value = this.grid[row][col] + 1;
    valid = false;
    while(!valid && value <= maxValue) {
      if(this.isValid(row, col, value)) {
        valid = true;
        this.grid[row][col] = value;
        i++;
      } else {
        value++;
      }
    }
    if (!valid) {
      this.grid[row][col] = 0;
      i--;
    } 
    if (i == -1) {
      throw "No solution found";
    }
  }
}

Board.prototype.isValid = function(row, col, value) {
  if (this.validRow(row, value) && this.validColumn(col, value) && this.validSubGrid(row, col, value)) {
      return true;
    } else {
      return false;
    };
}

Board.prototype.validRow = function(row, value) {
  return !this.grid[row].includes(value);
}

Board.prototype.validColumn = function(col, value) {
  let values = [];
  for (let row = 0; row <= 8; row++) {
    values.push(this.grid[row][col])
  }
  return !values.includes(value);
}

Board.prototype.validSubGrid = function(row, col, value) {
  let values = [];
  let topLeftOfSubGrid = [parseInt(row/3)*3, parseInt(col/3)*3];
  for (let i = topLeftOfSubGrid[0]; i <= topLeftOfSubGrid[0] + 2; i++) {
    for (let j = topLeftOfSubGrid[1]; j <= topLeftOfSubGrid[1] + 2; j++) {
      values.push(this.grid[i][j])
    }
  }
  return !values.includes(value);
}

module.exports = Board;