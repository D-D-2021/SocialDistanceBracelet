const express = require('express');

const router = express.Router();

const mapController = require('../controllers/mapController');

router.get('/paths', mapController.getPaths);

router.get('/interactions', mapController.getInteractions);

router.get('/heatmap', mapController.getHeatmap);

module.exports = router;
