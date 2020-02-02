function newBoard() {
  document.getElementById('board').innerHTML +=
  '<p>This is a new board</p>'
}

(function renderNumButtons() {
  for (let i = 1; i < 10; i++) {
    document.getElementById('num_buttons').innerHTML += 
    "<button onclick='numButtons(this.value)' value=" + i + ">[" + i + "]</button>"
  }
})();

function numButtons(val) {
  console.log(val)
}
