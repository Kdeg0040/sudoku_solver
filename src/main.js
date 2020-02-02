(function renderNumButtons() {
  for (let i = 1; i < 10; i++) {
    document.getElementById('num_buttons').innerHTML += 
    "<button onclick='numButtons(this.value)' value=" + i + ">[" + i + "]</button>"
  }
})();

function numButtons(val) {
  console.log(val)
}

function renderBoard(board) {
  boardDiv = document.getElementById("board");
  table = document.createElement('TABLE');
  tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);
  for (let i = 0; i < 9; i++) {
    tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (let j = 0; j < 9; j++) {
      td = document.createElement('TD');
      if (board.grid[i][j] != 0) {
        td.appendChild(document.createTextNode(board.grid[i][j]));
      }
      tableBody.appendChild(td);
    }
  }
  boardDiv.appendChild(table);
}

function newBoard() {
  const blank = 
  '000000000000000000000000000000000000000000000000000000000000000000000000000000000'
  let board = new Board(blank);
  board.makeGrid(blank);
  renderBoard(board);
}
newBoard();
