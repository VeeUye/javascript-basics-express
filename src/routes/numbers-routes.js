const req = require('express/lib/request');

const router = require('express').Router();
const { add, multiply, subtract, divide, remainder } = require('../lib/numbers');

router.get('/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  return Number.isNaN(a || b)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: add(a, b) });
});

router.get('/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  return Number.isNaN(a || b)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: subtract(b, a) });
});

router.post('/multiply', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(parseInt(a, 10) || parseInt(b, 10))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: multiply(a, b) });
});

router.post('/divide', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(parseInt(a, 10) || parseInt(b, 10))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  if (!Number.isFinite(divide(a, b))) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  res.status(200).json({ result: divide(a, b) });
});

router.post('/remainder', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(parseInt(a, 10) || parseInt(b, 10))) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  if (!Number.isFinite(remainder(a, b))) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  res.status(200).json({ result: remainder(a, b) });
});

module.exports = router;
