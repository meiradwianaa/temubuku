const express = require('express');
const router = express.Router();
const temubukuController = require('../controllers/TemubukuController');

router.get('/temubuku', temubukuController.getTemubuku);
router.get('/temubuku:id', temubukuController.getTemubuku);

module.exports = router;