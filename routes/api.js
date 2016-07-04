'use strict';

const express = require('express');

let router = express.Router();

router.use('/galleries', require('./galleries'));

module.exports = router;
