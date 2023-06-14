const express = require('express');
const router = express.Router();
const balanceController = require('../controllers/balanceController');

// Calculer la balance comptable
router.get('/', balanceController.calculateBalance);

module.exports = router;
