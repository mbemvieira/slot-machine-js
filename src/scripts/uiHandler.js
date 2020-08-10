import * as utils from './utils';
import * as game from './game';

let coins = utils.INITIAL_COINS;
let running = false;
let gameMode = game.GAME_MODE_RANDOM;

export const start = () => {
  createSlots(document.getElementById('reel1'));
  createSlots(document.getElementById('reel2'));

  const reel3 = document.getElementById('reel3');

  createSlots(reel3);
  reel3.addEventListener('animationend', resultHandler);

  document.getElementById('spin').addEventListener('click', () => spin(2));

  document.getElementById('btnBalance').addEventListener('click', setBalanceManually);
  setBalanceText(coins);

  document.getElementById('radio-random').addEventListener('change', handleRadioRandom);
  document.getElementById('radio-fixed').addEventListener('change', handleRadioFixed);
};

const createSlots = (reel) => {
  const slotAngle = 360 / utils.SLOTS_PER_REEL;

  for (let i = 0; i < utils.SLOTS_PER_REEL; i++) {
    const slot = document.createElement('div');
    slot.className = 'slot reelsIcon' + (i+1);
    slot.style.transform = `rotateX(${slotAngle * (-i)}deg) translateZ(${utils.REEL_RADIUS}px)`;

    reel.append(slot);
  }
}

const spin = (timer) => {
  if (coins <= 0 || running) return;

  let reelElement = null;

  resetPrize();
  subtractFromBalance(1);

  for (let i = 0; i < utils.SLOTS_NUMBER; i++) {
    reelElement = document.getElementById(`reel${i + 1}`);
    const oldPosition = parseInt(reelElement.className.slice(11));
    let position = null;

    if (gameMode == game.GAME_MODE_FIXED) {
      position = document.getElementById(`select-reel${i + 1}`).value;
    } else {
      position = utils.getSeed();
    }

    reelElement.style.animation = `spin-${position} ${timer + i * 0.5}s`;
    reelElement.setAttribute('class', `reels spin-${position}`);
  }

  running = true;
}

const resultHandler = () => {
  let reelElement = null;
  running = false;

  for (let i = 0; i < utils.SLOTS_NUMBER; i++) {
    reelElement = document.getElementById(`reel${i + 1}`);
    reelElement.style.animation = 'none';
  }

  displayWinningPrize(game.getFinalPosition(getReelsPositions()))
};

const displayWinningPrize = (result) => {
  if (result == null) return;

  const prizeElement = document.getElementById(`prize-${result.category}`);
  const amountElement = document.getElementById(`amount-${result.category}`);

  prizeElement.setAttribute('class', 'highlightPrize');
  amountElement.setAttribute('class', 'blinking');

  addToBalance(result.amount);
}

const resetPrize = () => {
  const prizeElements = document.getElementsByClassName('highlightPrize');
  const amountElements = document.getElementsByClassName('blinking');

  if (prizeElements.length > 0) {
    for (let i = 0; i < prizeElements.length; i++) {
      prizeElements[i].removeAttribute('class');
    }
  }

  if (amountElements.length > 0) {
    for (let i = 0; i < amountElements.length; i++) {
      amountElements[i].removeAttribute('class');
    }
  }
}

const getReelsPositions = () => {
  return [
    parseInt(document.getElementById('reel1').className.slice(11)),
    parseInt(document.getElementById('reel2').className.slice(11)),
    parseInt(document.getElementById('reel3').className.slice(11)),
  ];
}

const setBalanceText = (value) => {
  document.getElementById('balance').innerHTML = `BALANCE: ${value}`;
};

const setBalanceManually = () => {
  const value = parseInt(
    document.getElementById('newBalance').value
  );

  if (Number.isInteger(value)) {
    coins = (value > 5000 || value <= 0) ? 1000 : value;
  } else {
    coins = 0;
  }

  setBalanceText(coins);
};

const addToBalance = (value) => {
  const amount = parseInt(value);

  if (Number.isInteger(amount)) {
    coins += amount;
    setBalanceText(coins);
  }
};

const subtractFromBalance = (value) => {
  const amount = parseInt(value);

  if (Number.isInteger(amount)) {
    coins = amount <= coins ? (coins - amount) : 0;
    setBalanceText(coins);
  }
};

const handleRadioRandom = () => {
  gameMode = game.GAME_MODE_RANDOM;
  showOptionsContainer(false);
}

const handleRadioFixed = () => {
  gameMode = game.GAME_MODE_FIXED;
  showOptionsContainer(true);
}

const showOptionsContainer = (showOptions) => {
  const optionsContainer = document.getElementById('fixed-options-container');

  if (!!showOptions) {
    optionsContainer.removeAttribute('class');
  } else {
    optionsContainer.setAttribute('class', 'hide-element');
  }
}
