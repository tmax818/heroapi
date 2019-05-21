const express = require('express');
const cors = require('cors');
const router = express.Router();
const Todo = require('../../../models/todo');

router.use(express.json());

router.get('/', cors(), (req, res) => {
  Todo.find({})
    .then(todo => {
      res.json(todo);
    })
    .catch(err => {
      console.log('error!', err);
    });
});

router.post('/', cors(), (req, res) => {
  let item = new Todo({ title: req.body.title, complete: req.body.complete });
  item.save();
});

module.exports = router;
