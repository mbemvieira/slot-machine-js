import { winningCombinations, positions } from './combinations'

export const GAME_MODE_RANDOM = 'random';
export const GAME_MODE_FIXED = 'fixed';

export const getFinalPosition = (finalPosition) => {
  const combinationString = positions[finalPosition[0]]
    + '+' + positions[finalPosition[1]]
    + '+' + positions[finalPosition[2]];
  return winningCombinations[combinationString] || null;
}
