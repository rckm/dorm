import firstFloor from "../static/dormSchemes/1.webp";
import secondFloor from "../static/dormSchemes/2.webp";
import thirdFloor from "../static/dormSchemes/3.webp";
import thirdFloor2 from "../static/dormSchemes/3.2.webp";
import thirdFloor3 from "../static/dormSchemes/3.3.webp";

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
  1: "Мужской",
  2: "Женский"
};

export function sortByKeys(obj) {
  const keys = Object.keys(obj).sort();

  return keys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});
}

export const coordinatesDB = {
  // first dorm
  1: {
    coordinates: [
      {
        floor: [1, 2, 3],
        data: [
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
        ]
      }
    ],

    recCoordinates: [
      {
        floor: [1, 2, 3],
        data: [
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
      }
    ]
  },
  // second dorm
  2: {
    coordinates: [
      {
        floor: [1, 2, 3],
        data: [
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
        ]
      }
    ],

    recCoordinates: [
      {
        floor: [1, 2, 3],
        data: [
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
    ]
  },
  // third dorm
  3: {
    coordinates: [
      {
        floor: 1,
        data: [
          { x: 161.98407, y: 597.47583 },
          { x: 243.49495, y: 597.47583 },
          { x: 323.06778, y: 597.45337 },
          { x: 401.10922, y: 597.21539 },
          { x: 487.48932, y: 597.72919 },
          { x: 563.62671, y: 597.25238 },
          { x: 642.75714, y: 597.3877 },
          { x: 809.97614, y: 189.55362 },
          { x: 810.44543, y: 246.29956 },
          { x: 966.21051, y: 219.12029 },
          { x: 966.40686, y: 304.13739 },
          { x: 966.60321, y: 382.08609 }
        ]
      },
      {
        floor: 2,
        data: [
          { x: 136.03755, y: 295.42755 },
          { x: 135.91437, y: 371.40308 },
          { x: 135.73537, y: 449.60577 },
          { x: 303.63455, y: 368.86215 },
          { x: 102.90739, y: 592.63855 },
          { x: 172.15715, y: 592.57117 },
          { x: 251.29391, y: 592.41669 },
          { x: 326.11978, y: 592.53461 },
          { x: 402.15686, y: 592.37482 },
          { x: 479.63385, y: 444.45654 },
          { x: 553.32062, y: 444.26019 },
          { x: 630.61481, y: 444.43933 },
          { x: 479.81863, y: 592.41669 },
          { x: 551.7359, y: 592.6944 },
          { x: 630.03967, y: 592.27789 },
          { x: 705.40643, y: 592.81757 },
          { x: 787.61902, y: 592.83325 },
          { x: 847.19952, y: 592.41913 },
          { x: 939.93744, y: 592.48071 },
          { x: 771.03345, y: 153.18594 },
          { x: 790.36377, y: 224.27596 },
          { x: 790.35217, y: 280.20898 },
          { x: 895.92944, y: 103.73804 },
          { x: 955.31195, y: 87.778336 },
          { x: 940.74976, y: 169.31308 },
          { x: 940.3186, y: 246.22028 },
          { x: 940.23969, y: 321.47781 },
          { x: 940.24548, y: 394.93552 },
          { x: 939.98755, y: 468.89175 }
        ]
      },
      {
        floor: 3,
        data: [
          { x: 96.549789, y: 321.21371 },
          { x: 96.19075, y: 404.18008 },
          { x: 95.963448, y: 491.15308 },
          { x: 288.28125, y: 406.13452 },
          { x: 64.954201, y: 660.33136 },
          { x: 141.51723, y: 660.33136 },
          { x: 228.85991, y: 660.33136 },
          { x: 312.88577, y: 660.05493 },
          { x: 394.42401, y: 660.88416 },
          { x: 485.35989, y: 660.60773 },
          { x: 480.64719, y: 491.65741 },
          { x: 565.23975, y: 491.72687 },
          { x: 652.30603, y: 491.72684 },
          { x: 725.27582, y: 487.02802 },
          { x: 564.41052, y: 660.60773 },
          { x: 648.16003, y: 660.60779 },
          { x: 731.63306, y: 660.33136 },
          { x: 824.50378, y: 660.60773 },
          { x: 888.90509, y: 660.33136 },
          { x: 986.19824, y: 660.33136 },
          { x: 985.92181, y: 514.66809 },
          { x: 985.36902, y: 434.23547 },
          { x: 985.92181, y: 352.6972 },
          { x: 986.19824, y: 271.43536 },
          { x: 985.92188, y: 184.0927 },
          { x: 1007.2047, y: 80.165977 },
          { x: 1007.4811, y: 112.50488 },
          { x: 801.00964, y: 166.95584 },
          { x: 830.58453, y: 246.55928 },
          { x: 831.13739, y: 308.74948 }
        ]
      }
    ],

    recCoordinates: [
      {
        floor: 1,
        data: [
          { x: 130.37, y: 518.55, width: 72.925, height: 120.75 },
          { x: 210.62, y: 518.27, width: 73.55, height: 120.75 },
          { x: 291.42, y: 518.55, width: 73.55, height: 120.75 },
          { x: 372.31, y: 518.55, width: 68.249, height: 120.75 },
          { x: 456.72, y: 518.55, width: 66.999, height: 120.75 },
          { x: 530.94, y: 518.15, width: 72.414, height: 120.75 },
          { x: 610.66, y: 518.55, width: 71.719, height: 120.75 },
          { x: 782.3, y: 164.83, width: 73.094, height: 38.091 },
          { x: 782.3, y: 210.24, width: 73.094, height: 62.83 },
          { x: 908.75, y: 182.36, width: 114.33, height: 71.469 },
          { x: 907.96, y: 261.33, width: 115.11, height: 75.004 },
          { x: 907.57, y: 343.79, width: 115.11, height: 66.364 }
        ]
      },
      {
        floor: 2,
        data: [
          { x: 83.643, y: 254.46, width: 114.47, height: 67.346 },
          { x: 83.643, y: 328.68, width: 114.47, height: 74.843 },
          { x: 83.643, y: 410.75, width: 114.47, height: 62.67 },
          { x: 259.76, y: 332.41, width: 104.85, height: 64.83 },
          { x: 83.643, y: 524.24, width: 54.387, height: 114.9 },
          { x: 145.29, y: 524.63, width: 68.917, height: 114.5 },
          { x: 221.38, y: 524.63, width: 70.028, height: 114.5 },
          { x: 298.54, y: 524.91, width: 70.028, height: 114.5 },
          { x: 375.33, y: 524.91, width: 64.891, height: 114.5 },
          { x: 455.61, y: 524.91, width: 63.713, height: 114.5 },
          { x: 526.43, y: 524.91, width: 68.621, height: 114.5 },
          { x: 602.15, y: 524.91, width: 68.228, height: 114.5 },
          { x: 677.43, y: 524.91, width: 69.603, height: 114.5 },
          { x: 455.43, y: 404.26, width: 65.021, height: 68.68 },
          { x: 527.29, y: 403.87, width: 67.77, height: 69.075 },
          { x: 602.1, y: 404.06, width: 67.77, height: 69.075 },
          { x: 891.02, y: 525.96, width: 103.61, height: 113.23 },
          { x: 725.53, y: 116.67, width: 109.98, height: 64.461 },
          { x: 765.58, y: 188.14, width: 69.93, height: 63.283 },
          { x: 765.78, y: 258.83, width: 69.341, height: 32.064 },
          { x: 935.71, y: 47.511, width: 59.067, height: 70.105 },
          { x: 883.37, y: 80.554, width: 45.322, height: 37.062 },
          { x: 884.11, y: 124.72, width: 110.58, height: 72.604 },
          { x: 884.11, y: 204.41, width: 110.58, height: 68.481 },
          { x: 884.21, y: 279.81, width: 110.58, height: 71.328 },
          { x: 884.07, y: 357.97, width: 110.58, height: 63.474 },
          { x: 884.07, y: 428.42, width: 110.58, height: 68.195 },
          { x: 765.75, y: 526.23, width: 58.65, height: 112.9 },
          { x: 829.62, y: 525.95, width: 48.654, height: 112.9 }
        ]
      },
      {
        floor: 3,
        data: [
          { x: 48.666, y: 279.29, width: 125.48, height: 74.465 },
          { x: 48.666, y: 361.29, width: 125.48, height: 82.869 },
          { x: 48.666, y: 451.66, width: 125.48, height: 69.325 },
          { x: 243.37, y: 365.2, width: 116.09, height: 71.533 },
          { x: 48.599, y: 577.22, width: 60.392, height: 127.18 },
          { x: 116.94, y: 577.22, width: 76.147, height: 127.18 },
          { x: 200.71, y: 577.22, width: 77.529, height: 127.18 },
          { x: 285.69, y: 577.22, width: 77.529, height: 127.18 },
          { x: 370.47, y: 577.22, width: 72.278, height: 127.18 },
          { x: 459.92, y: 577.22, width: 70.343, height: 127.18 },
          { x: 537.87, y: 577.22, width: 75.733, height: 127.18 },
          { x: 621.6, y: 577.22, width: 75.733, height: 127.18 },
          { x: 704.82, y: 577.22, width: 77.115, height: 127.18 },
          { x: 802.03, y: 577.22, width: 64.802, height: 127.18 },
          { x: 873.25, y: 577.22, width: 52.88, height: 127.18 },
          { x: 940.7, y: 577.22, width: 113.96, height: 127.18 },
          { x: 933.22, y: 471.47, width: 121.24, height: 75.199 },
          { x: 933.22, y: 393.27, width: 121.24, height: 70.501 },
          { x: 933.22, y: 307.27, width: 121.24, height: 78.709 },
          { x: 933.22, y: 223.9, width: 121.24, height: 75.531 },
          { x: 933.22, y: 135.6, width: 121.24, height: 80.612 },
          { x: 990.08, y: 51.249, width: 64.581, height: 76.737 },
          { x: 990.08, y: 89.249, width: 64.581, height: 38.3685 },
          { x: 757.86, y: 127, width: 121.24, height: 71.231 },
          { x: 801.45, y: 205.96, width: 77.072, height: 70.254 },
          { x: 801.45, y: 283.92, width: 77.072, height: 35.66 },
          { x: 459.14, y: 444.63, width: 71.711, height: 76.018 },
          { x: 538.75, y: 444.63, width: 75.229, height: 76.018 },
          { x: 621.36, y: 444.63, width: 75.229, height: 76.018 },
          { x: 704.53, y: 444.63, width: 77.302, height: 76.156 }
        ]
      }
    ]
  }
};
