const Position = require('../models/positionModel');

exports.savePosition = async (req, res) => {
    const position = new Position({
        time: new Date(),
        beacon: req.body.beacon,
        braceletmac: req.body.braceletmac,
        distance: req.body.distance,
    });
    try {
        const savedPosition = await position.save();
        res.send(savedPosition);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.saveMultiple = async (req, res) => {
    req.body.forEach(async (pos) => {
        const position = new Position({
            time: new Date(),
            beacon: pos.beacon,
            braceletmac: pos.braceletmac,
            distance: pos.distance,
        });
        try {
            const savedPosition = await position.save();
            res.send(savedPosition);
        } catch (err) {
            res.status(400).send(err);
        }
    });
};
