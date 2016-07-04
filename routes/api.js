'use strict';

const express = require('express');

let router = express.Router();

router.use('/galleries', require('./galleries'));
router.use('/photos', require('./photos'));

module.exports = router;
