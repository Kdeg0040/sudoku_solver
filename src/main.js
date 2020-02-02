function newBoard() {
  const blank = 
  '000000000000000000000000000000000000000000000000000000000000000000000000000000000'
  let board = new Board(blank);
  board.makeGrid(blank);
  renderBoard(board);
}
newBoard();

(function renderNumButtons() {
  for (let i = 1; i < 10; i++) {
    document.getElementById('num_buttons').innerHTML += 
    "<button onclick='numButtons(this.value)' value=" + i + ">[" + i + "]</button>"
  }
})();

function renderBoard(board) {
  board = document.getElementById("board");
  table = document.createElement('TABLE');
  tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);
  for (let i = 0; i < 9; i++) {
    tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (let i = 0; i < 9; i++) {
      td = document.createElement('TD');
      tableBody.appendChild(td);
    }
  }
  board.appendChild(table);
}

function numButtons(val) {
  console.log(val)
}