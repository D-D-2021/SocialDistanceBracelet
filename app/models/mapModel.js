const mongoose = require('mongoose');

const { Schema } = mongoose;

const PathSchema = new Schema({
    color: {
        type: String,
        required: true,
    },
    data: [
        {
            x: Number,
            y: Number,
        },
    ],
});

const InteractionSchema = new Schema({
    x: {
        type: Number,
        required: true,
    },
    y: {
        type: Number,
        required: true,
    },
});

const HeatmapSchema = new Schema({
    x: {
        type: Number,
        required: true,
    },
    y: {
        type: Number,
        required: true,
    },
});

module.exports = {
    Path: mongoose.model('Path', PathSchema),
    Interaction: mongoose.model('Interaction', InteractionSchema),
    Heatmap: mongoose.model('Heatmap', HeatmapSchema),
};
