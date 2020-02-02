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
      tableBody.appendChild(td);
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
}

Game.prototype.numButtons = function(value) {
  console.log(value)
}

game = new Game();
