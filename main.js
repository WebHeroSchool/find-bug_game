//  let difficult = 3
const minimalPosition = 0
const menuDifficult = document.querySelectorAll('.menu-difficult a')
  
    menuDifficult.addEventListener('click', () => {
      let difficult = +menuDifficult.dataset.diff
      return difficult
    })
  


function createTable(diff) {
  const gameContainer = document.querySelector('#game-container')
  for(let i = 0; i < diff; i++) {
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




const startButton = document.querySelector('#start-button')
startButton.addEventListener('click', () => {
  createTable(difficult)
  setBug(minimalPosition, difficult)
})


