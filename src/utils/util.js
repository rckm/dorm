export function findName(names, id) {
  return names.find(name => id === name.id);
}

/**
 * @param {} values state that will be sended
 * @param  {...any} fields state that will be deleted
 */
export function withoutFields(values, ...fields) {
  const newValues = { ...values };
  fields.forEach(field => {
    delete newValues[field];
  });

  return newValues;
}

export const gender = {
  1: 'Мужской',
  2: 'Женский'
};

export function sortByKeys(obj) {
  const keys = Object.keys(obj).sort();

  return keys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});
}

export const coordinatesDB = {
  1: {
    coordinates: [
      { x: 120, y: 556 },
      { x: 221, y: 556 },
      { x: 320, y: 556 },
      { x: 416, y: 556 },
      { x: 505, y: 556 },
      { x: 596, y: 556 },
      { x: 692, y: 556 },
      { x: 779, y: 556 },
      { x: 859, y: 556 },
      { x: 943, y: 556 }
    ],

    recCoordinates: [
      { x: 86.989, width: 96.972, y: 444.01, height: 191.57 },
      { x: 188.99, width: 96.972, y: 444.01, height: 191.57 },
      { x: 290.99, width: 92.218, y: 444.01, height: 191.57 },
      { x: 388.99, width: 87.465, y: 444.01, height: 191.57 },
      { x: 480.99, width: 83.187, y: 444.01, height: 191.57 },
      { x: 570.99, width: 85.563, y: 444.01, height: 191.57 },
      { x: 660.99, width: 87.244, y: 444.01, height: 191.57 },
      { x: 754.99, width: 77.262, y: 444.01, height: 191.57 },
      { x: 837.46, width: 73.228, y: 444.01, height: 191.57 },
      { x: 916.78, width: 77.598, y: 444.01, height: 191.57 }
    ]
  },

  2: {
    coordinates: [
      { x: 23, y: 348 },
      { x: 91, y: 348 },
      { x: 26, y: 524 },
      { x: 92, y: 524 },
      { x: 257, y: 148 },
      { x: 330, y: 148 },
      { x: 395, y: 148 },
      { x: 465, y: 148 },
      { x: 540, y: 148 },
      { x: 670, y: 148 },
      { x: 740, y: 148 },
      { x: 810, y: 148 },
      { x: 880, y: 148 },
      { x: 950, y: 148 },
      { x: 337, y: 335 },
      { x: 408, y: 335 },
      { x: 476, y: 335 },
      { x: 547, y: 335 },
      { x: 673, y: 335 },
      { x: 739, y: 335 },
      { x: 808, y: 335 },
      { x: 880, y: 335 },
      { x: 948, y: 335 }
    ],

    recCoordinates: [
      { x: 9.4245, y: 279.2, width: 62.438, height: 123.3 },
      { x: 77.752, y: 279.59, width: 64.401, height: 123.3 },
      { x: 10.014, y: 456.11, width: 62.634, height: 123.89 },
      { x: 78.341, y: 456.3, width: 64.597, height: 123.3 },
      { x: 244.25, y: 81.679, width: 56.94, height: 132.14 },
      { x: 306.1, y: 81.679, width: 63.027, height: 132.34 },
      { x: 373.25, y: 81.679, width: 65.775, height: 132.34 },
      { x: 443.54, y: 81.876, width: 68.328, height: 132.14 },
      { x: 516.19, y: 81.776, width: 69.974, height: 132.17 },
      { x: 647.53, y: 81.776, width: 69.974, height: 132.17 },
      { x: 721.67, y: 81.499, width: 61.088, height: 132.17 },
      { x: 787.14, y: 81.483, width: 67.739, height: 132.73 },
      { x: 859.01, y: 81.287, width: 65.775, height: 132.93 },
      { x: 928.91, y: 81.679, width: 62.241, height: 132.34 },
      { x: 319.06, y: 266.24, width: 66.561, height: 119.77 },
      { x: 390.33, y: 265.85, width: 64.597, height: 120.36 },
      { x: 460.66, y: 266.43, width: 63.032, height: 119.12 },
      { x: 529.24, y: 265.87, width: 66.919, height: 119.95 },
      { x: 657.25, y: 265.04, width: 62.476, height: 120.79 },
      { x: 724.45, y: 266.43, width: 62.199, height: 119.68 },
      { x: 792.48, y: 266.15, width: 64.975, height: 120.23 },
      { x: 863.28, y: 266.15, width: 64.975, height: 119.68 },
      { x: 932.15, y: 266.43, width: 63.865, height: 119.4 }
    ]
  }
};
