const req = require('express/lib/request');

const router = require('express').Router();
const { add, multiply } = require('../lib/numbers');

router.get('/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: add(a, b) });
});

router.post('/multiply', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;
  res.status(200).json({ result: multiply(a, b) });
});

module.exports = router;
