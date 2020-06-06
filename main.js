// let difficult = 3
const minimalPosition = 0

function getDifficult() {
  let difficult 
  return difficult
}

function createTable(difficult) {
  const gameContainer = document.querySelector('#game-container')
  for(let i = 0; i < difficult; i++) {
    const card = document.createElement('div')
    card.innerHTML = `карта ${i}`
    gameContainer.appendChild(card, gameContainer)
  }
}

function getRandomPosition(minPos, diff) {
  return Math.floor(Math.random() * (diff - minPos)) + minPos;
}

function setBug(minPos, diff) {
  const bugPosition = getRandomPosition(minPos, diff)
  console.log(bugPosition)
  const gameCards = document.querySelectorAll('#game-container div')
  gameCards[bugPosition].innerHTML = `BUG!`
}


createTable(difficult)
setBug(minimalPosition, difficult)