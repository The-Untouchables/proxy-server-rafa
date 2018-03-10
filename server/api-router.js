const express = require('express');
const router = express.Router();
const env = require('./environment.js');

router.route('/:roomid/description')
  .get((req, res, next) => res.redirect(`http://${env.descHost}:${env.descPort}/api/rooms/${req.params.roomid}/description`));

router.route('/:roomid/carousel')
  .get((req, res, next) => res.redirect(`http://${env.photoHost}:${env.photoPort}/api/rooms/${req.params.roomid}/carousel`));

router.route('/:roomid/neighborhood')
  .get((req, res, next) => res.redirect(`http://${env.neighborhoodHost}:${env.neighborhoodPort}/api/rooms/${req.params.roomid}/neighborhood`));

module.exports = router;
