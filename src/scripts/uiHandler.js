import * as utils from './utils';
import * as game from './game';

let coins = utils.INITIAL_COINS;

export const start = () => {
  createSlots(document.getElementById('reel1'));
  createSlots(document.getElementById('reel2'));
  createSlots(document.getElementById('reel3'));

  document.getElementById('spin').addEventListener('click', () => spin(2));
  document.getElementById('btnBalance').addEventListener('click', setInitialBalance);
};

const createSlots = (reel) => {
  const slotAngle = 360 / utils.SLOTS_PER_REEL;

  for (let i = 0; i < utils.SLOTS_PER_REEL; i++) {
    const slot = document.createElement('div');

    // TODO: Images
    slot.className = 'slot reelsIcon' + (i+1);

    // slot.className = 'slot';
    slot.style.transform = `rotateX(${slotAngle * (-i)}deg) translateZ(${utils.REEL_RADIUS}px)`;

    // const childP = document.createElement('p');
    // childP.innerHTML = i + 1;

    // slot.appendChild(childP);
    reel.append(slot);
  }
}

const spin = (timer) => {
  for (let i = 0; i < utils.SLOTS_NUMBER; i++) {
    const reelElement = document.getElementById(`reel${i + 1}`);
    const oldClass = reelElement.className;
    const oldSeed = parseInt(oldClass.slice(11));
    let seed = utils.getSeed();

    while (oldSeed == seed) seed = utils.getSeed();

    reelElement.style.animation = `spin-${seed} ${timer + i * 0.5}s`;
    reelElement.setAttribute('class', `reels spin-${seed}`);
  }

  setTimeout(() => {
    const positions = getReelsPositions();
    console.log('positions', positions);

    const result = game.getFinalPosition(positions);
    console.log('result', result);
  }, 5000)
}

const getReelsPositions = () => {
  return [
    parseInt(document.getElementById('reel1').className.slice(11)),
    parseInt(document.getElementById('reel2').className.slice(11)),
    parseInt(document.getElementById('reel3').className.slice(11)),
  ];
}

const setInitialBalance = () => {
  const value = setBalanceValue(
    parseInt(document.getElementById('newBalance').value)
  );

  let status = document.getElementById("status");
  status.firstElementChild.innerHTML = `BALANCE: ${value}`
};

const setBalanceValue = (value) => {
  if (Number.isInteger(value)) {
    coins = (value > 5000 || value <= 0) ? 1000 : value;
    return coins;
  }

  return 0;
};
