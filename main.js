let difficult = 0
const minimalPosition = 0


let handler = function() {
  difficult = +(this.dataset.diff)
  console.log(difficult)
  return difficult
}

  const containerForDifficult = document.querySelectorAll('.difficult-level div')

  containerForDifficult.forEach((elem)=> {
    elem.addEventListener('click', handler) 
  })




function createTable(diff) {
  const gameContainer = document.querySelector('#game-container')
  for(let i = 0; i < diff; i++) {
    const card = document.createElement('div')
    card.innerHTML = `карта ${i}`
    gameContainer.appendChild(card, gameContainer)
  }
}

// возможно переменную gameContainer надо вынести выше
function resetTable() {
  const gameContainer = document.querySelector('#game-container')
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




const startButton = document.querySelector('#start-button')
startButton.addEventListener('click', () => {
  resetTable()
  createTable(difficult)
  setBug(minimalPosition, difficult)
})




