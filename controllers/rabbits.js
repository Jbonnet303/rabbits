const express = require('express');
const router = express.Router();
const Rabbit = require('../models/rabbits.js');

router.get('/', (req, res) => {
  Rabbit.find({}, (err, rabbits) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    } else {
      res.status(200).json(rabbits);
    }
  })
})

router.post('/', (req, res) => {
  Rabbit.create(req.body, (err, rabbit) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    } else {
      res.status(200).json(rabbit);
    }
  })
})

router.delete('/:id', (req, res) => {
  Rabbit.findByIdAndRemove(req.params.id, (err, rabbit) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    } else {
      res.status(200).json(rabbit);
    }
  })
})

router.put('/:id', (req, res) => {
  Rabbit.findByIdAndUpdate(req.params.id, req.body, (err, rabbit) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    } else {
      res.status(200).json(rabbit);
    }
  })
})

module.exports = router;
