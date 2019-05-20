const express = require('express');
const path = require('path');
const cors = require('cors');
const quoteslist = require('./quoteslist');
const router = express.Router();

router.get('/quotes', cors(), (req, res) => {
  res.json(quoteslist);
});

router.get('/:id', cors(), (req, res) => res.json(quoteslist[req.params.id]));

module.exports = router;
