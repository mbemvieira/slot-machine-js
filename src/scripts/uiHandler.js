import * as utils from './utils';

let coins = utils.INITIAL_COINS;

export const start = () => {
  createSlots(document.getElementById('ring1'));
  createSlots(document.getElementById('ring2'));
  createSlots(document.getElementById('ring3'));

  document.getElementById('spin').addEventListener('click', () => spin(2));
  document.getElementById('btnBalance').addEventListener('click', setInitialBalance);
};

const createSlots = (ring) => {
  const slotAngle = 360 / utils.SLOTS_PER_REEL;

  for (let i = 0; i < utils.SLOTS_PER_REEL; i++) {
    const slot = document.createElement('div');

    // TODO: Images
    // slot.className = 'slot reelsIcon' + (i+1);

    slot.className = 'slot';
    slot.style.transform = `rotateX(${slotAngle * (-i)}deg) translateZ(${utils.REEL_RADIUS}px)`;

    const childP = document.createElement('p');
    childP.innerHTML = i + 1;

    slot.appendChild(childP);
    ring.append(slot);
  }
}

const spin = (timer) => {
  for (let i = 0; i < utils.SLOTS_NUMBER; i++) {
    const ringElement = document.getElementById(`ring${i + 1}`);
    const oldClass = ringElement.className;
    const oldSeed = parseInt(oldClass.slice(10));
    let seed = utils.getSeed();

    while (oldSeed == seed) seed = utils.getSeed();

    ringElement.style.animation = `spin-${seed} ${timer + i * 0.5}s`;
    ringElement.setAttribute('class', `ring spin-${seed}`);
  }
}

const setInitialBalance = () => {
  const value = setBalanceValue(
    parseInt(document.getElementById('newBalance').value)
  );

  let status = document.getElementById("status");
  status.firstElementChild.innerHTML = `Balance: ${value}`
};

const setBalanceValue = (value) => {
  if (Number.isInteger(value)) {
    coins = (value > 5000 || value <= 0) ? 1000 : value;
    return coins;
  }

  return 0;
};
