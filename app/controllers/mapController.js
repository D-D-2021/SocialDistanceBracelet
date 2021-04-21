const { Path, Interaction } = require('../models/mapModel');

exports.getPaths = async (req, res) => {
    await Path.find({}, (err, pathList) => {
        if (err) throw err;
        else res.send(pathList);
    });
};

exports.getInteractions = async (req, res) => {
    await Interaction.find({}, (err, interactionList) => {
        if (err) throw err;
        else res.send(interactionList);
    });
};
