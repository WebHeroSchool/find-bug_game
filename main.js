const minimalPosition = 0
const containerForDifficult = document.querySelectorAll('.difficult-level div')
const gameContainer = document.querySelector('#game-container')
const startButton = document.querySelector('#start-button')

let difficult = 0

const handlerForUserSetDifficult = function() {
  difficult = +(this.dataset.diff)
  console.log(difficult)
  return difficult
}

const handlerForUserFindBug = function() {
  if(this.innerHTML == `BUG!`) {
    console.log('EPIC WIN!')
    this.addEventListener('click', resetTable)
  } else {
    console.log('Проиграл')
    this.addEventListener('click', resetTable)
  }
}

containerForDifficult.forEach((elem)=> {
  elem.addEventListener('click', handlerForUserSetDifficult) 
  })

function createTable(diff) {
  for(let i = 0; i < diff; i++) {
    const card = document.createElement('div')
    card.innerHTML = `карта ${i}`
    gameContainer.appendChild(card, gameContainer)
  }
}

function resetTable() {
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
  gameCards[bugPosition].innerHTML = `BUG!`
}

startButton.addEventListener('click', () => {
  resetTable()
  createTable(difficult)
  setBug(minimalPosition, difficult)
  const ArrIntoBugFind = document.querySelectorAll('#game-container div')
  ArrIntoBugFind.forEach((elem) => {
    elem.addEventListener('click', handlerForUserFindBug)
  })
})




