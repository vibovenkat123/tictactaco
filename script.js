let oTurn;
const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board')
const onClick = (cell, xClass, oClass, isOTurn, hoverX, hoverO) => {
  let currentClass = isOTurn ? oClass : xClass;
  drawLetter(cell, currentClass);
  switchTurns();
  onHover(hoverX,  hoverO)
}
function onStart(hoverClassX, hoverClassO, classX, classO){
  oTurn = false;
  onHover(hoverClassX, hoverClassO)
  cells.forEach(cell => {
    cell.addEventListener('click', function(e){
      let cell = e.target;
      onClick(cell, classX, classO, oTurn, hoverClassX, hoverClassO)
    }, {once: true});
  });
}
function drawLetter(cell, currentClass){
  cell.classList.add(currentClass)
}

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
onStart('x-active', 'o-active', 'letter-x', 'letter-o');