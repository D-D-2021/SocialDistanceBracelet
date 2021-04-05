const mongoose = require('mongoose');

const { Schema } = mongoose;

const LocationSchema = new Schema({
    time: {
        type: Date,
        required: true,
    },
    bracelet: {
        type: Number,
        required: true,
    },
    x: {
        type: Number,
        required: true,
    },
    y: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Location', LocationSchema);
