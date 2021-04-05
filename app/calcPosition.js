// Define beacons - would use db if more
const beacons = {
    b1: {
        x: 50,
        y: 50,
    },
    b2: {
        x: -50,
        y: 50,
    },
    b3: {
        x: -50,
        y: -50,
    },
    b4: {
        x: 50,
        y: -50,
    },
};

/**
 * Determine the position of a bracelet given an array of three ranges
 * @param {Array<Object>} distances three closest distances
 */
const calcPos = (distances) => {
    const r1 = distances[0].distance;
    const r2 = distances[1].distance;
    const r3 = distances[2].distance;
    const { x: x1, y: y1 } = beacons[distances[0].beacon]; // Closest
    const { x: x2, y: y2 } = beacons[distances[1].beacon];
    const { x: x3, y: y3 } = beacons[distances[2].beacon]; // Farthest

    // https://www.101computing.net/cell-phone-trilateration-algorithm/
    const A = 2 * x2 - 2 * x1;
    const B = 2 * y2 - 2 * y1;
    const C = r1 ** 2 - r2 ** 2 - x1 ** 2 + x2 ** 2 - y1 ** 2 + y2 ** 2;
    const D = 2 * x3 - 2 * x2;
    const E = 2 * y3 - 2 * y2;
    const F = r2 ** 2 - r3 ** 2 - x2 ** 2 + x3 ** 2 - y2 ** 2 + y3 ** 2;

    const xPos = (C * E - F * B) / (E * A - B * D);
    const yPos = (C * D - A * F) / (B * D - A * E);

    return { x: xPos, y: yPos };
};

// const testCase = [
//     {
//         distance: 47.405,
//         beacon: 'b2',
//     },
//     {
//         distance: 128.247,
//         beacon: 'b1',
//     },
//     {
//         distance: 144.039,
//         beacon: 'b3',
//     },
// ];

// console.log(calcPos(testCase));
