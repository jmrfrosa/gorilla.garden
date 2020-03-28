const express = require('express');
const knex = require('knex');
const { Model } = require('objection');
const knexConfig = require('./knexfile');

const router = require('./routes');

const app  = express();
const port = 5000;
const db = knex(knexConfig[process.env.NODE_ENV || 'development']);

Model.knex(db);

app.use('/', router);

app.listen(port, () => console.log(`Server listening on port ${port}`));
