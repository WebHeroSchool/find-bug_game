const minimalPosition = 0
const containerForDifficult = document.querySelectorAll('.difficult-level div')
const gameMenu = document.querySelector('#menu')
const gameContainer = document.querySelector('#game-container')
const startButton = document.querySelector('#start-button')

// сложность по умочанию "простой"
let difficult = 3

const handlerForUserSetDifficult = function() {
  difficult = +(this.dataset.diff)
  console.log(difficult)
  return difficult
}

const handlerForUserFindBug = function() {
  if(this.classList.contains('bug')) {
    this.classList.add('card_bug')
    this.addEventListener('click', resetTable)
  } else {
    this.classList.add('card_inside')
    this.addEventListener('click', resetTable)
  }
}

containerForDifficult.forEach((elem)=> {
  elem.addEventListener('click', handlerForUserSetDifficult) 
  })

function createTable(diff) {
  for(let i = 0; i < diff; i++) {
    const card = document.createElement('div')
    card.classList.add('card_top')
    gameContainer.appendChild(card, gameContainer)
  }
}

function resetTable() {
  gameMenu.classList.remove('hide')
  
  while(gameContainer.firstChild) {
    gameContainer.removeChild(gameContainer.firstChild);
  }
}
function getRandomPosition(minPos, diff) {
  return Math.floor(Math.random() * (diff - minPos)) + minPos;
}

function setBug(minPos, diff) {
  const bugPosition = getRandomPosition(minPos, diff)
  const gameCards = document.querySelectorAll('#game-container div')
  gameCards[bugPosition].classList.add('bug')
}

startButton.addEventListener('click', () => {
  resetTable()
  createTable(difficult)
  setBug(minimalPosition, difficult)
  const ArrIntoBugFind = document.querySelectorAll('#game-container div')
  ArrIntoBugFind.forEach((elem) => {
    elem.addEventListener('click', handlerForUserFindBug)
  })
  gameMenu.classList.add('hide')
})




