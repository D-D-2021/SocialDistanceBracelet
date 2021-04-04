const { User } = require('../models/userModel');

exports.createUser = async (req, res) => {
    const user = new User({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        contactTracing: req.body.contactTracing,
        address: req.body.address,
        phone: req.body.phone,
    });
    try {
        const createdUser = await user.save();
        res.send(createdUser);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.getUserList = async (req, res) => {
    await User.find({}, (err, userList) => {
        if (err) throw err;
        else res.send(userList);
    });
};
