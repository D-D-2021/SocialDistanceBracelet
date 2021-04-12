const Bracelet = require('../models/braceletModel');

exports.createBracelet = async (req, res) => {
    const bracelet = new Bracelet({
        id: req.body.id,
        macAddress: req.body.macaddress,
        usage: [],
    });
    try {
        const createdBracelet = await bracelet.save();
        res.send(createdBracelet);
    } catch (err) {
        res.status(400).send(err);
    }
};

/* Checkout a bracelet, i.e., assign a user to a bracelet */
exports.checkoutBracelet = async (req, res) => {
    const { user, braceletId } = req.body;
    const checkoutUsage = {
        user,
        timeStart: new Date(),
    };
    try {
        const updatedBracelet = await Bracelet.findOneAndUpdate(
            { id: braceletId },
            {
                $push: {
                    usage: checkoutUsage,
                },
            },
        );
        res.send(updatedBracelet);
    } catch (err) {
        res.status(400).send(err);
    }
};

/* Check in a bracelet, i.e., unassign a user to a bracelet */
exports.checkinBracelet = async (req, res) => {
    const { user, braceletId } = req.body;
    try {
        const updatedBracelet = await Bracelet.findOneAndUpdate(
            { id: braceletId },
            {
                $set: {
                    'usage.$[element0].timeEnd': new Date(),
                },
            },
            {
                arrayFilters: [
                    { 'element0.user': user },
                ],
            },
        );
        res.send(updatedBracelet);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.getBraceletList = async (req, res) => {
    await Bracelet.find({}, (err, braceletList) => {
        if (err) throw err;
        else res.send(braceletList);
    });
};
