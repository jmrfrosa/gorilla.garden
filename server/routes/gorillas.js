const express = require('express');
const Gorilla = require('../models/Gorilla');

const router = express.Router();

// Listing gorillas
router.get('/', async (req, res, next) => {
  const gorillas = await Gorilla.query();

  return res.json(gorillas);
});

// Single gorilla
router.get('/:id', async (req, res, next) => {
  const gorilla = await Gorilla
    .query()
    .findById(req.params.id);

  return res.json(gorilla);
});

router.post('/create', express.json(), async (req, res, next) => {
  const gorilla = {
    name: req.body.name,
    gender: req.body.gender
  }

  const newGorilla = await Gorilla.query().insert(gorilla);
  return newGorilla ? res.json(newGorilla) : res.status(500);
});

module.exports = router;