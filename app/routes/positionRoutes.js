const express = require('express');

const router = express.Router();

const positionController = require('../controllers/positionController');

router.put('/save', positionController.savePosition);

module.exports = router;
