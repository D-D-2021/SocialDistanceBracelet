const express = require('express');

const router = express.Router();

const braceletController = require('../controllers/braceletController');

router.put('/create', braceletController.createBracelet);
