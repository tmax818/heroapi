const mongoose = require('mongoose');

mongoose.connect(`${process.env.DBURL}`, {
  useNewUrlParser: true,
  useCreateIndex: true
});
