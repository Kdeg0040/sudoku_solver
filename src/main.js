(function renderNumButtons() {
  for (let i = 1; i < 10; i++) {
    document.getElementById('num_buttons').innerHTML += 
    "<button onclick='game.setCellValue(this.value)' value=" + i + ">[" + i + "]</button>"
  }
  document.getElementById('num_buttons').innerHTML += 
    "<button onclick='game.setCellValue(this.value)' value='0'>[<<]</button>"
})();

(function renderTable() {
  tableDiv = document.getElementById("board");
  table = document.createElement('TABLE');
  table.setAttribute("id", "table")
  tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);
  for (let i = 0; i < 9; i++) {
    tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (let j = 0; j < 9; j++) {
      td = document.createElement('TD');
      td.setAttribute("onclick", "game.selectCell(this)");
      td.setAttribute("class", "");
      td.setAttribute("id", "cell");

      tr.appendChild(td);
    }
  }
  tableDiv.appendChild(table);
})();

function Game() {
  const blank = 
  '000000000000000000000000000000000000000000000000000000000000000000000000000000000'
  board = new Board(blank);
  board.makeGrid(board.input);
  this.board = board;
  this.selected = null;
}

Game.prototype.setCellValue = function(value) {
  if (this.selected != null) {
    row = this.selected[0];
    column = this.selected[1];
    this.board.grid[row][column] = parseInt(value);
  }
  if (value == 0) {
    document.getElementsByClassName("selected")[0].innerHTML = "";
    this.selected = null;
  } else {
    document.getElementsByClassName("selected")[0].innerHTML = value;
    document.getElementsByClassName("selected")[0].className = ""
    this.selected = null;
  }

}

Game.prototype.selectCell = function(element) {
  row = element.parentNode.rowIndex;
  column = element.cellIndex;
  if (element.className == "selected") {
    this.selected = null;
    element.className = ""
  } else {
    if (document.getElementsByClassName("selected")[0]) {
      document.getElementsByClassName("selected")[0].className = ""
    }
    this.selected = [row, column]; 
    element.className = "selected"
  }
}

Game.prototype.solve = function() {
  this.board.solve();
  this.renderGrid();
}

Game.prototype.clearBoard = function() {
  game = new Game();
  this.board.makeGrid(board.input);
  this.renderGrid();
}

Game.prototype.renderGrid = function() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (this.board.grid[i][j] == 0) {
        document.getElementById("table").rows[i].cells[j].innerHTML = ""
      } else {
        document.getElementById("table").rows[i].cells[j].innerHTML = 
        this.board.grid[i][j];        
      }
    }
  }
}

game = new Game();
