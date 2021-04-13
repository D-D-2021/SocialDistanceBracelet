const Location = require('../models/locationModel');

exports.getCurrentLocations = async (req, res) => {
    const currTime = new Date();
    const timeLimit = new Date(currTime.getTime() - (15 * 1000)); // 15 seconds before
    await Location.find(
        {
            time: {
                $gte: timeLimit,
            },
        },
        (err, locationList) => {
            if (err) throw err;
            else res.send(locationList);
        },
    );
};

exports.getAllLocations = async (req, res) => {
    await Location.find(
        {},
        (err, locationList) => {
            if (err) throw err;
            else res.send(locationList);
        },
    );
};
