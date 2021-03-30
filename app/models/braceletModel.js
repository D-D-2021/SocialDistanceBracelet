const mongoose = require('mongoose');

const { Schema } = mongoose;

const BraceletSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    macAddress: {
        type: String,
        required: true,
    },
    usage: [{
        user: mongoose.Schema.Types.ObjectId,
        timeStart: {
            type: Date,
            required: true,
        },
        timeEnd: {
            type: Date,
        },
    }],
});

module.exports = {
    User: mongoose.model('Bracelet', BraceletSchema),
};
