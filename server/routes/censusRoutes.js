const express = require('express');
const router = express.Router();
const censusController = require('../controllers/census.controller');

router.post('/vote', censusController.createCensusEntry);
router.get('/data', censusController.getAllCensusEntries);
router.get('/data:id', censusController.getCensusEntryById);

module.exports = router;
