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
  //if (req.params.id === 'new') return next();

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

  await Gorilla.query().insert(gorilla);
  return res.status(200);
})

router.get('/new/:name', async (req, res, next) => {
  const gorillaName = req.params.name;

  const gorilla = await Gorilla.query().insert({
    name: gorillaName,
    gender: ['m','f','t'][Math.floor(Math.random() * 3)]
  });

  return res.redirect(`../${gorilla.id}`);
})

module.exports = router;