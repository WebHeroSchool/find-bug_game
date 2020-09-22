
let cards = [];
const numberOfCard = getGameDifficult();
const startButton = document.getElementById('game-start');

function getGameDifficult() {
  const diff = document.getElementsByName('diff');
  const easyChecked = document.getElementById('checked-easy');
  const mediumChecked = document.getElementById('checked-medium');
  const hardChecked = document.getElementById('checked-hard');

  if (diff[0].checked) {
    easyChecked.classList.add('checked');
    mediumChecked.classList.remove('checked');
    hardChecked.classList.remove('checked');
    return 3;
  } else if (diff[1].checked) {
    easyChecked.classList.remove('checked');
    mediumChecked.classList.add('checked');
    hardChecked.classList.remove('checked');
    return 6;
  } else if (diff[2].checked) {
    easyChecked.classList.remove('checked');
    mediumChecked.classList.remove('checked');
    hardChecked.classList.add('checked');
    return 10;
  } else {
    easyChecked.classList.add('checked');
    return 3;
  };
};

const createAndShowCards = () => {
  getGameDifficult();
  createMainContainer();
  const main = document.getElementById('main');
  const keysOfCardClasses = {
    3: 'main-for-three-cards',
    6: 'main-to-six-cards',
    10: 'main-to-ten-cards',
  };
  
  createCards(numberOfCard);
  addFrontAndBackCardsSide();
  main.className = keysOfCardClasses[numberOfCard];
};

const createMainContainer = () => {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  document.body.append(main);
};

const createCards = (number) => {
  for (let i = 0; i < number; i++) {
    const card = document.createElement('div');
    card.className = 'card card-looser';
    document.body>main.append(card);
  };
};

const addFrontAndBackCardsSide = () => {
  let numberOfEachCardTurns = 0;
  Array.from(document.querySelectorAll('.card')).forEach(el => {
    cards.push(el);
    const cardFront = document.createElement('div');
    cardFront.className = 'card__front';
    cards[numberOfEachCardTurns].append(cardFront);

    const cardBack = document.createElement('div');
    cardBack.className = 'card__looser_back';
    cards[numberOfEachCardTurns].append(cardBack);
    numberOfEachCardTurns++;
  });
};

const setRandomOfWinner = () => {
  const randomNumberOfCard = cards[Math.floor(Math.random() * (numberOfCard))];
  const a = randomNumberOfCard.querySelector('.card__looser_back');
  a.className = 'card__winner_back';
  randomNumberOfCard.setAttribute('id', 'card-win');
  randomNumberOfCard.className = 'card card__winner';
};

const startGameAndDecideWinnerAndLoosers = () => {
  const menu = document.getElementById('nav');
  let numberOfClick = 0;
  menu.className = 'nav-before-start';
  const body = document.body;
  createAndShowCards();
  setRandomOfWinner();
  
  const losers = document.querySelectorAll('card__looser');
  losers.forEach((elem) => {
    elem.addEventListener('click', () => {
        if (elem.className !== 'card__looser_rotated' && numberOfClick == 0) {
          elem.className = 'card__looser_rotated';
          numberOfClick++;
        } else {
          location.reload(true);
      };
    });
  });
      
  const win = document.getElementById('card-win');
  const clickOnWinnerCard = () => {
      if (win.className !== 'card__winner_rotated' && numberOfClick == 0) {
        win.className = 'card__winner_rotated';
        numberOfClick++;
       } else {
         location.reload(true);
       };
     };
  win.addEventListener('click', clickOnWinnerCard);
};
startButton.addEventListener('click', startGameAndDecideWinnerAndLoosers, {once: true});
