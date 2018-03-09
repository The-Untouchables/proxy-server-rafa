const express = require('express');
const router = express.Router();

let descHost = process.env.DESCRIPTION_SERVICE_HOST || 'localhost';
let descPort = process.env.DESCRIPTION_SERVICE_PORT || '3000';

let photoHost = process.env.CAROUSEL_SERVICE_HOST || 'localhost';
let photoPort = process.env.CAROUSEL_SERVICE_PORT || '3001';

let reviewsHost = process.env.REVIEWS_SERVICE_HOST || 'localhost';
let reviewsPort = process.env.CAROUSEL_SERVICE_PORT || '3004';

let neighborhoodHost = process.env.NEIGHBORHOOD_SERVICE_HOST || 'localhost';
let neighborhoodPort = process.env.NEIGHBORHOOD_SERVICE_PORT || '3006';

router.route('/:roomid/description')
  .get((req, res, next) => res.redirect(`http://${descHost}:${descPort}/api/rooms/${req.params.roomid}/description`));

router.route('/:roomid/carousel')
  .get((req, res, next) => res.redirect(`http://${photoHost}:${photoPort}/api/rooms/${req.params.roomid}/carousel`));

router.route('/:roomid/neighborhood')
  .get((req, res, next) => res.redirect(`http://${neighborhoodHost}:${neighborhoodPort}/api/rooms/${req.params.roomid}/neighborhood`));

module.exports = router;
