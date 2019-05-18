const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const quotes = require('./quotes');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.json(quotes))
  .get('/:id', (req, res) => res.json(quotes[req.params.id]))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
