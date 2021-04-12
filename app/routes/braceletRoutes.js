const express = require('express');

const router = express.Router();

const braceletController = require('../controllers/braceletController');

router.put('/create', braceletController.createBracelet);

router.put('/checkout', braceletController.checkoutBracelet);

router.put('/checkin', braceletController.checkinBracelet);

router.get('/braceletlist', braceletController.getBraceletList);

module.exports = router;
