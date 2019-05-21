const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
  title: {
    type: String
  },
  complete: {
    type: Boolean
  }
});

module.exports = Todo;
