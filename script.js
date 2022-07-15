const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
let oTurn;
const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board')
const winText = document.querySelector('[data-win-text]'); 
const restartBtn = document.getElementById('restartBtn');
const onClick = (cell, xClass, oClass, isOTurn, hoverX, hoverO) => {
  let currentClass = isOTurn ? oClass : xClass;
  drawLetter(cell, currentClass);
  if (winCheck(currentClass)){
    onEnd(false);
  }else if (isDraw(xClass, oClass)){
    onEnd(true);
  }
  else{
    switchTurns(xClass, oClass);
    onHover(hoverX,  hoverO)
  }
}
const onEnd = (isDraw) => {
  if (isDraw){
    winText.textContent = 'Its A Draw!!';
  } else{
    winText.textContent = `${oTurn ? "🌯 Burrito O has Won!!" : "🌮 Taco X has Won !!"}`
  }
  winText.parentElement.style.display = 'flex';
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
  restartBtn.addEventListener('click', restart);
}
function restart(){
  location.reload();
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
function isDraw(xClass, oClass){
  return [...cells].every(cell => {
    return cell.classList.contains(xClass) || cell.classList.contains(oClass)
  })
}
onStart('x-active', 'o-active', 'letter-x', 'letter-o');
function winCheck (currentClass) {
  return winConditions.some(combination => {
    return combination.every(index => {
      return cells[index].classList.contains(currentClass);
    });
  });
}