var express = require('express')
var router = express.Router()

const axios = require('axios');

require('dotenv').config()

var tx = require('../core/transaction.js');

const asyncHandler = fn => (req, res, next) =>
  Promise
    .resolve(fn(req, res, next))
    .catch(next)


router.get('/test', (req, res) => {
  return res.send('test');
});

router.get('/generate/seed', asyncHandler(async (req, res, next) => {
  let seed = await tx.generateSeed();

  return res.send(seed);
}));

tx.generateSeed()
tx.generateSeed()
tx.generateSeed()
tx.generateSeed()
tx.generateSeed()
tx.generateSeed()

module.exports = router
