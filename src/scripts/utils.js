export const SLOTS_PER_REEL = 5;
export const SLOTS_NUMBER = 3;
/**
 * Calculate radius using the following formula:
 * Math.round((panelHeight / 2) / Math.tan(Math.PI / SLOTS_PER_REEL));
 */
export const REEL_RADIUS = 55;
export const INITIAL_COINS = 100;

export const getSeed = () => {
  return Math.floor(Math.random() * 2 * SLOTS_PER_REEL);
}
