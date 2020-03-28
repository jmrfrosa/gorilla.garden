const express = require('express');
const gorillaRouter = require('./gorillas');

const router = express.Router();

router.get('/', (req, res) => res.send('Welcome to gorilla.garden'));
router.use('/gorillas', gorillaRouter);

module.exports = router;