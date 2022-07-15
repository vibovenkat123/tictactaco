let oTurn;
const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board')
const onClick = (cell, xClass, oClass, isOTurn, hoverX, hoverO) => {
  let currentClass = isOTurn ? oClass : xClass;
  drawLetter(cell, currentClass);
  switchTurns();
  onHover(hoverX,  hoverO)
}
function drawLetter(cell, currentClass){
  cell.classList.add(currentClass)
}
cells.forEach(cell => {
  cell.addEventListener('click', function(e){
    let cell = e.target;
    onClick(cell, 'letter-x', 'letter-o', oTurn, 'x-active', 'o-active')
  }, {once: true});
});
function onHover(classX, classO){
  board.classList.remove(classX);
  board.classList.remove(classO);
  if (oTurn){
    board.classList.add(classO);
  }
  else{
    board.classList.add(classX);
  }
}
function switchTurns(){
  oTurn = !oTurn;
}