const { Bracelet } = require('../models/braceletModel');

exports.createBracelet = async (req, res) => {
    const bracelet = new Bracelet({
        id: req.body.id,
    });
    try {
        const createdBracelet = await bracelet.save();
        res.send(createdBracelet);
    } catch (err) {
        res.status(400).send(err);
    }
};