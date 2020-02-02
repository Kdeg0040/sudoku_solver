(function renderNumButtons() {
  for (let i = 1; i < 10; i++) {
    document.getElementById('num_buttons').innerHTML += 
    "<button onclick='game.numButtons(this.value)' value=" + i + ">[" + i + "]</button>"
  }
})();

(function renderTable() {
  tableDiv = document.getElementById("board");
  table = document.createElement('TABLE');
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

Game.prototype.numButtons = function(value) {
  if (this.selected != null) {
    row = this.selected[0];
    column = this.selected[1];
    this.board.grid[row][column] = parseInt(value);
  }
  document.getElementsByClassName("selected")[0].innerHTML = value;
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

game = new Game();
