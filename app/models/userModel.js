const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contactTracing: {
        type: Boolean,
        required: true,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
});

module.exports = mongoose.model('User', UserSchema);
