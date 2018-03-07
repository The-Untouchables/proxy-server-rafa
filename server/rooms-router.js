const express = require('express');
const path = require('path');
const router = express.Router();

router.route('/:roomid')
  .get((req, res, next) => res.sendFile('index.html', {root: path.resolve('public')}))
  .options((req, res) => {
    res.sendStatus(200);
  });

router.route('/:roomid/reviews')
  .get((req, res, next) => res.redirect(`http://localhost:3004/rooms/${req.params.roomid}/reviews`));

router.route('/:roomid/ratings')
  .get((req, res, next) => res.redirect(`http://localhost:3004/rooms/${req.params.roomid}/ratings`));

router.route('/:roomid/description')
  .get((req, res, next) => res.redirect(`http://localhost:3002/rooms/${req.params.roomid}/description`));

module.exports = router;
