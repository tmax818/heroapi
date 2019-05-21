const mongoose = require('mongoose');

mongoose.connect('mongodb://tmax818:reds1234@ds259596.mlab.com:59596/nata', {
  useNewUrlParser: true,
  useCreateIndex: true
});
