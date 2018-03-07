const express = require('express');
const router = express.Router();

router.route('/:roomid/description')
  .get((req, res, next) => res.redirect(`http://localhost:3002/api/rooms/${req.params.roomid}/description`));

module.exports = router;
