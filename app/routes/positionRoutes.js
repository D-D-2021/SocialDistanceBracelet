const express = require('express');

const router = express.Router();

const positionController = require('../controllers/positionController');

// Save a single position
router.put('/save', positionController.savePosition);

// Save an array of positions - used for development
router.put('/savemultiple', positionController.saveMultiple);

module.exports = router;
