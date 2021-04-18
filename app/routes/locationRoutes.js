const express = require('express');

const router = express.Router();

const locationController = require('../controllers/locationController');

router.get('/current', locationController.getCurrentLocations);

router.get('/all', locationController.getAllLocations);

module.exports = router;
