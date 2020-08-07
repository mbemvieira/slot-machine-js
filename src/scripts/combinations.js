const symbols = [
  '3xbar',
  'bar',
  '2xbar',
  'seven',
  'cherry',
];

const positions = [
  // [0]: 3xbar
  `${symbols[0]}`,
  // [1]: 3xbar, bar
  `${symbols[0]}_${symbols[1]}`,
  // [2]: bar
  `${symbols[1]}`,
  // [3]: bar, 2xbar,
  `${symbols[1]}_${symbols[2]}`,
  // [4]: 2xbar
  `${symbols[2]}`,
  // [5]: 2xbar, seven
  `${symbols[2]}_${symbols[3]}`,
  // [6]: seven
  `${symbols[3]}`,
  // [7]: seven, cherry
  `${symbols[3]}_${symbols[4]}`,
  // [8]: cherry
  `${symbols[4]}`,
  // [9]: cherry, 3xbar
  `${symbols[4]}_${symbols[0]}`,
];

/**
 * From lowest to highest combination. In case of object property overlap, get
 * the highest pontuation.
 */
const combinations = {
  // any bars on any [?/1000]
  // top - bar, 2xbar, 3xbar
  [positions[3] + positions[5] + positions[1]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[3] + positions[1] + positions[5]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[1] + positions[3] + positions[5]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[1] + positions[5] + positions[3]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[5] + positions[1] + positions[3]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[5] + positions[3] + positions[1]]: {
    category: 'any_bar',
    points: 5,
  },
  // center - bar, 2xbar, 3xbar
  [positions[2] + positions[4] + positions[0]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[2] + positions[0] + positions[4]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[0] + positions[2] + positions[4]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[0] + positions[4] + positions[2]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[4] + positions[0] + positions[2]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[4] + positions[2] + positions[0]]: {
    category: 'any_bar',
    points: 5,
  },
  // bottom - bar, 2xbar, 3xbar
  [positions[1] + positions[3] + positions[9]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[1] + positions[9] + positions[3]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[9] + positions[1] + positions[3]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[9] + positions[3] + positions[1]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[3] + positions[9] + positions[1]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[3] + positions[1] + positions[9]]: {
    category: 'any_bar',
    points: 5,
  },

  // top - bar, 2xbar, 2xbar
  [positions[3] + positions[5] + positions[5]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[5] + positions[3] + positions[5]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[5] + positions[5] + positions[3]]: {
    category: 'any_bar',
    points: 5,
  },
  // center - bar, 2xbar, 2xbar
  [positions[2] + positions[4] + positions[4]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[4] + positions[2] + positions[4]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[4] + positions[4] + positions[2]]: {
    category: 'any_bar',
    points: 5,
  },
  // bottom - bar, 2xbar, 2xbar
  [positions[1] + positions[3] + positions[3]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[3] + positions[1] + positions[3]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[3] + positions[3] + positions[1]]: {
    category: 'any_bar',
    points: 5,
  },

  // top - bar, bar, 2xbar
  [positions[3] + positions[3] + positions[5]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[5] + positions[3] + positions[3]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[3] + positions[5] + positions[3]]: {
    category: 'any_bar',
    points: 5,
  },
  // center - bar, bar, 2xbar
  [positions[2] + positions[2] + positions[4]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[4] + positions[2] + positions[2]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[2] + positions[4] + positions[2]]: {
    category: 'any_bar',
    points: 5,
  },
  // bottom - bar, bar, 2xbar
  [positions[1] + positions[1] + positions[3]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[3] + positions[1] + positions[1]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[1] + positions[3] + positions[1]]: {
    category: 'any_bar',
    points: 5,
  },

  // top - bar, 3xbar, 3xbar
  [positions[3] + positions[1] + positions[1]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[1] + positions[3] + positions[1]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[1] + positions[1] + positions[3]]: {
    category: 'any_bar',
    points: 5,
  },
  // center - bar, 3xbar, 3xbar
  [positions[2] + positions[0] + positions[0]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[0] + positions[2] + positions[0]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[0] + positions[0] + positions[2]]: {
    category: 'any_bar',
    points: 5,
  },
  // bottom - bar, 3xbar, 3xbar
  [positions[1] + positions[9] + positions[9]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[9] + positions[1] + positions[9]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[9] + positions[9] + positions[1]]: {
    category: 'any_bar',
    points: 5,
  },

  // top - bar, bar, 3xbar
  [positions[3] + positions[3] + positions[1]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[1] + positions[3] + positions[3]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[3] + positions[1] + positions[3]]: {
    category: 'any_bar',
    points: 5,
  },
  // center - bar, bar, 3xbar
  [positions[2] + positions[2] + positions[0]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[0] + positions[2] + positions[2]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[2] + positions[0] + positions[2]]: {
    category: 'any_bar',
    points: 5,
  },
  // bottom - bar, bar, 3xbar
  [positions[1] + positions[1] + positions[9]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[9] + positions[1] + positions[1]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[1] + positions[9] + positions[1]]: {
    category: 'any_bar',
    points: 5,
  },

  // top - 2xbar, 3xbar, 3xbar
  [positions[5] + positions[1] + positions[1]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[1] + positions[5] + positions[1]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[1] + positions[1] + positions[5]]: {
    category: 'any_bar',
    points: 5,
  },
  // center - 2xbar, 3xbar, 3xbar
  [positions[4] + positions[0] + positions[0]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[0] + positions[4] + positions[0]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[0] + positions[0] + positions[4]]: {
    category: 'any_bar',
    points: 5,
  },
  // bottom - 2xbar, 3xbar, 3xbar
  [positions[3] + positions[9] + positions[9]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[9] + positions[3] + positions[9]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[9] + positions[9] + positions[3]]: {
    category: 'any_bar',
    points: 5,
  },

  // top - 2xbar, 2xbar, 3xbar
  [positions[5] + positions[5] + positions[1]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[1] + positions[5] + positions[5]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[5] + positions[1] + positions[5]]: {
    category: 'any_bar',
    points: 5,
  },
  // center - 2xbar, 2xbar, 3xbar
  [positions[4] + positions[4] + positions[0]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[0] + positions[4] + positions[4]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[4] + positions[0] + positions[4]]: {
    category: 'any_bar',
    points: 5,
  },
  // bottom - 2xbar, 2xbar, 3xbar
  [positions[3] + positions[3] + positions[9]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[9] + positions[3] + positions[3]]: {
    category: 'any_bar',
    points: 5,
  },
  [positions[3] + positions[9] + positions[3]]: {
    category: 'any_bar',
    points: 5,
  },

  // 3 bar on any [3/1000]
  [positions[3] + positions[3] + positions[3]]: {
    category: '3_bar_any',
    points: 10,
  },
  [positions[2] + positions[2] + positions[2]]: {
    category: '3_bar_any',
    points: 10,
  },
  [positions[1] + positions[1] + positions[1]]: {
    category: '3_bar_any',
    points: 10,
  },

  // 3 2xbar on any [3/1000]
  [positions[5] + positions[5] + positions[5]]: {
    category: '3_2xbar_any',
    points: 20,
  },
  [positions[4] + positions[4] + positions[4]]: {
    category: '3_2xbar_any',
    points: 20,
  },
  [positions[3] + positions[3] + positions[3]]: {
    category: '3_2xbar_any',
    points: 20,
  },

  // 3 3xbar on any [3/1000]
  [positions[1] + positions[1] + positions[1]]: {
    category: '3_3xbar_any',
    points: 50,
  },
  [positions[0] + positions[0] + positions[0]]: {
    category: '3_3xbar_any',
    points: 50,
  },
  [positions[9] + positions[9] + positions[9]]: {
    category: '3_3xbar_any',
    points: 50,
  },

  // 3 seven + cherry on any [18/1000]
  // top - 1 cherry
  [positions[9] + positions[7] + positions[7]]: {
    category: '3_cherry_seven_any',
    points: 75,
  },
  [positions[7] + positions[9] + positions[7]]: {
    category: '3_cherry_seven_any',
    points: 75,
  },
  [positions[7] + positions[7] + positions[9]]: {
    category: '3_cherry_seven_any',
    points: 75,
  },
  // top - 2 cherries
  [positions[7] + positions[9] + positions[9]]: {
    category: '3_cherry_seven_any',
    points: 75,
  },
  [positions[9] + positions[7] + positions[9]]: {
    category: '3_cherry_seven_any',
    points: 75,
  },
  [positions[9] + positions[9] + positions[7]]: {
    category: '3_cherry_seven_any',
    points: 75,
  },
  // center - 1 cherry
  [positions[8] + positions[6] + positions[6]]: {
    category: '3_cherry_seven_any',
    points: 75,
  },
  [positions[6] + positions[8] + positions[6]]: {
    category: '3_cherry_seven_any',
    points: 75,
  },
  [positions[6] + positions[6] + positions[8]]: {
    category: '3_cherry_seven_any',
    points: 75,
  },
  // center - 2 cherries
  [positions[6] + positions[8] + positions[8]]: {
    category: '3_cherry_seven_any',
    points: 75,
  },
  [positions[8] + positions[6] + positions[8]]: {
    category: '3_cherry_seven_any',
    points: 75,
  },
  [positions[8] + positions[8] + positions[6]]: {
    category: '3_cherry_seven_any',
    points: 75,
  },
  // bottom - 1 cherry
  [positions[7] + positions[5] + positions[5]]: {
    category: '3_cherry_seven_any',
    points: 75,
  },
  [positions[5] + positions[7] + positions[5]]: {
    category: '3_cherry_seven_any',
    points: 75,
  },
  [positions[5] + positions[5] + positions[7]]: {
    category: '3_cherry_seven_any',
    points: 75,
  },
  // bottom - 2 cherries
  [positions[5] + positions[7] + positions[7]]: {
    category: '3_cherry_seven_any',
    points: 75,
  },
  [positions[7] + positions[5] + positions[7]]: {
    category: '3_cherry_seven_any',
    points: 75,
  },
  [positions[7] + positions[7] + positions[5]]: {
    category: '3_cherry_seven_any',
    points: 75,
  },

  // 3 seven on any [3/1000]
  [positions[5] + positions[5] + positions[5]]: {
    category: '3_seven_any',
    points: 150,
  },
  [positions[6] + positions[6] + positions[6]]: {
    category: '3_seven_any',
    points: 150,
  },
  [positions[7] + positions[7] + positions[7]]: {
    category: '3_seven_any',
    points: 150,
  },

  // 3 cherry on center [1/1000]
  [positions[8] + positions[8] + positions[8]]: {
    category: '3_cherry_center',
    points: 1000,
  },

  // 3 cherry on top [1/1000]
  [positions[9] + positions[9] + positions[9]]: {
    category: '3_cherry_top',
    points: 2000,
  },

  // 3 cherry on bottom [1/1000]
  [positions[7] + positions[7] + positions[7]]: {
    category: '3_cherry_bottom',
    points: 4000,
  },
}
