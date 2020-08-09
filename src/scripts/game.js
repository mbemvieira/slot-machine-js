import { winningCombinations, positions } from './combinations'

export const GAME_MODE_RANDOM = 'random';
export const GAME_MODE_FIXED = 'fixed';

export const getFinalPosition = (finalPosition) => {
  const combinationString = positions[finalPosition[0]]
    + '+' + positions[finalPosition[1]]
    + '+' + positions[finalPosition[2]];
  return winningCombinations[combinationString] || null;
}

export const gameMode = () => {
  const radioButtons = document.getElementsByName('game-mode');

  if (radioButtons.length > 0 && radioButtons[1] != null) {
    return radioButtons[1].checked ? GAME_MODE_FIXED : GAME_MODE_RANDOM;
  } else {
    return GAME_MODE_RANDOM;
  }
}
