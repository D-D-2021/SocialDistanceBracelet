const mongoose = require('mongoose');

const { Schema } = mongoose;

const PodSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    userList: [{
        username: String,
    }],
});

module.exports = mongoose.model('Pod', PodSchema);
