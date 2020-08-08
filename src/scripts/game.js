import { winningCombinations, positions } from './combinations'

export const getFinalPosition = (finalPosition) => {
  const combinationString =
    positions[finalPosition[0]]
    + '+' + positions[finalPosition[1]]
    + '+' + positions[finalPosition[2]];
  return winningCombinations[combinationString] || null;
}
