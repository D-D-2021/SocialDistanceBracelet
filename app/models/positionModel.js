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
    braceletMAC: {
        type: String,
        required: true,
    },
});

module.exports = {
    User: mongoose.model('Position', PositionSchema),
};
