const mongoose = require('mongoose');

const { Schema } = mongoose;

const PositionSchema = new Schema({
    time: {
        type: Date,
        required: true,
    },
    beacon: {
        type: String,
        required: true,
    },
    braceletmac: {
        type: String,
        required: true,
    },
    distance: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Position', PositionSchema);
