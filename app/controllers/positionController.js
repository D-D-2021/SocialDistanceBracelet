const { Position } = require('../models/positionModel');

exports.savePosition = async (req, res) => {
    const position = new Position({
        time: new Date(),
        beacon: req.body.beacon,
        braceletMac: req.body.braceletMAC,
    });
    try {
        const savedPosition = await position.save();
        res.send(savedPosition);
    } catch (err) {
        res.status(400).send(err);
    }
};
