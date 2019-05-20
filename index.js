const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
// const quotes = require('./quotes');
const quotesRoute = require('./routes/api/quotes');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', quotesRoute);

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('pages/index'));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
