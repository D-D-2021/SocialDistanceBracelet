const express = require('express');

const router = express.Router();

const podController = require('../controllers/podController');

router.get('/podlist', podController.getPods);

router.put('/create', podController.createPod);

router.put('/add', podController.addPodUser);

module.exports = router;
