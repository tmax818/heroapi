const express = require('express');
const path = require('path');
const app = express();
require('./db/mongoose');

const PORT = process.env.PORT || 5000;
const quotesRoute = require('./routes/api/quotes');
const pagesRoute = require('./routes/pages');
const todosRoute = require('./routes/api/todos');

// Middleware and routes
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', pagesRoute);
app.use('/api/quotes', quotesRoute);
app.use('/api/todos', todosRoute);

// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
