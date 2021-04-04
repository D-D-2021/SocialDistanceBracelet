const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.put('/create', userController.createUser);

router.get('/userlist', userController.getUserList);

module.exports = router;
