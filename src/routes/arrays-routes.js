const router = require('express').Router();
const { getNthElement } = require('../lib/arrays');

router.post('/element-at-index/:index', (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const array = req.body.array;
  // eslint-disable-next-line prefer-destructuring
  const index = req.params.index;

  res.status(200).json({ result: getNthElement(index, array) });
});

module.exports = router;
