const Position = require('./models/positionModel');
const Location = require('./models/locationModel');

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
    const { x: x1, y: y1 } = beacons[distances[0].beacon];
    const { x: x2, y: y2 } = beacons[distances[1].beacon];
    const { x: x3, y: y3 } = beacons[distances[2].beacon];

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

const groupBy = (items, key) => items.reduce(
    (acc, item) => ({
        ...acc,
        [item[key]]: [
            ...(acc[item[key]] || []),
            item,
        ],
    }),
    {},
);

const calcNewLocations = async () => {
    const currTime = new Date();
    // Get beacon data for last time period (15 seconds)
    const timeLimit = new Date(currTime.getTime() - (15 * 1000)); // 15 seconds before
    const newPositions = await Position.find(
        {
            time: {
                $gte: timeLimit,
            },
        },
    );
    // Assume three positions for each
    const groupedPositions = groupBy(newPositions, 'braceletmac');
    const locations = [];
    Object.keys(groupedPositions).forEach((bracelet) => {
        locations.push({ bracelet: calcPos(groupedPositions[bracelet]) });
    });
    return locations;
};

module.exports = calcNewLocations;
