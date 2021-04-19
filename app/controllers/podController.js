const Pod = require('../models/podModel');

exports.createPod = async (req, res) => {
    const pod = new Pod({
        name: req.body.name,
        userList: [{ username: req.body.username }],
    });
    try {
        const createdPod = await pod.save();
        res.send(createdPod);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.addPodUser = async (req, res) => {
    try {
        const updatedPod = await Pod.findOneAndUpdate(
            { name: req.body.name },
            {
                $push: {
                    userList: { username: req.body.username },
                },
            },
            {
                new: true,
            },
        );
        res.send(updatedPod);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.getPods = async (req, res) => {
    await Pod.find({}, (err, podList) => {
        if (err) throw err;
        else res.send(podList);
    });
};
