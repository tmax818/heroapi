const mongoose = require('mongoose');
require('dotenv');

mongoose.connect(`${process.env.DBURL}`, {
  useNewUrlParser: true,
  useCreateIndex: true
});
