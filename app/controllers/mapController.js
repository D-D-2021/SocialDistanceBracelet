const { Path, Interaction, Heatmap } = require('../models/mapModel');

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

exports.getHeatmap = async (req, res) => {
    await Heatmap.find({}, (err, heatmapList) => {
        if (err) throw err;
        else res.send(heatmapList);
    });
};
