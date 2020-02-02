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
      td.setAttribute("class", "selectable");
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
  this.selected;
}

Game.prototype.numButtons = function(value) {
  console.log(value)
}

Game.prototype.selectCell = function(element) {
  row = element.parentNode.rowIndex;
  column = element.cellIndex;
  if (element.className == "selected") {
    this.selected = null;
    element.className = "selectable"
  } else {
    if (document.getElementsByClassName("selected")[0]) {
      document.getElementsByClassName("selected")[0].className = "selectable"
    }
    this.selected = [row, column]; 
    element.className = "selected"
  }
  console.log(this.selected);
}

game = new Game();
