const express = require('express');
const path = require('path');
const router = express.Router();

let descHost = process.env.DESCRIPTION_SERVICE_HOST || 'localhost';
let descPort = process.env.DESCRIPTION_SERVICE_PORT || '3002';

let photoHost = process.env.CAROUSEL_SERVICE_HOST || 'localhost';
let photoPort = process.env.CAROUSEL_SERVICE_PORT || '3001';

let reviewsHost = process.env.REVIEWS_SERVICE_HOST || 'localhost';
let reviewsPort = process.env.REVIEWS_SERVICE_PORT || '3004';

let neighborhoodHost = process.env.NEIGHBORHOOD_SERVICE_HOST || 'localhost';
let neighborhoodPort = process.env.NEIGHBORHOOD_SERVICE_PORT || '3006';

router.route('/:roomid')
  .get((req, res, next) => res.sendFile('index.html', {root: path.resolve('public')}))
  .options((req, res) => {
    res.sendStatus(200);
  });

router.route('/:roomid/reviews')
  .get((req, res, next) => res.redirect(`http://${reviewsHost}:${reviewsPort}/rooms/${req.params.roomid}/reviews`));

router.route('/:roomid/ratings')
  .get((req, res, next) => res.redirect(`http://${reviewsHost}:${reviewsPort}/rooms/${req.params.roomid}/ratings`));

router.route('/:roomid/description')
  .get((req, res, next) => res.redirect(`http://${descHost}:${descPort}/rooms/${req.params.roomid}/description`));

router.route('/:roomid/carousel')
  .get((req, res, next) => res.redirect(`http://${photoHost}:${photoPort}/rooms/${req.params.roomid}/carousel`));

router.route('/:roomid/bookings')
  .get((req, res, next) => res.redirect(`http://localhost:3003/rooms/${req.params.roomid}/bookings`));

router.route('/:roomid/neighborhood')
  .get((req, res, next) => res.redirect(`http:/${neighborhoodHost}:${neighborhoodPort}/rooms/${req.params.roomid}/neighborhood`));

module.exports = router;
