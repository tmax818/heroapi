const express = require('express');
const cors = require('cors');
const router = express.Router();
const Todo = require('../../../models/todo');

router.use(express.json());

////////////// Create //////////
router.post('/', cors(), (req, res) => {
  let item = new Todo(req.body);
  item.save();
});

///////////// Read /////////////
router.get('/', cors(), (req, res) => {
  Todo.find({})
    .then(todo => {
      res.json(todo);
    })
    .catch(err => {
      console.log('error!', err);
    });
});

router.get('/:id', cors(), (req, res) => {
  let id = req.params.id;
  Todo.findById(id, (err, todo) => {
    res.json(todo);
  });
});

//////////// Update ////////////////

/////////// Delete ////////////////

module.exports = router;
