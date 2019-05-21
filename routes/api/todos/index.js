const express = require('express');
const cors = require('cors');
const router = express.Router();
const User = require('../../../models/todo');

router.get('/', cors(), (req, res) => {
  User.find({})
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      console.log('error!', err);
    });
});

module.exports = router;
