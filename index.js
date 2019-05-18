const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const quotes = require('./quotes');

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', cors(), (req, res) => res.render('pages/index'))
  .get('/quotes', cors(), (req, res) => res.json(quotes))
  .get('/quotes/:id', cors(), (req, res) => res.json(quotes[req.params.id]))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
