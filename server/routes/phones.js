const express = require('express');
const router = express.Router();
const phonesList = require('../data/phones.json');

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  console.log('here');
  res.json(phonesList[id]);
});
router.get('/', (req, res, next) => {
  res.json(phonesList);
});

module.exports = router;
