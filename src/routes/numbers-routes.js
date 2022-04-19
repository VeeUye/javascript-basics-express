const req = require('express/lib/request');

const router = require('express').Router();
const { add } = require('../lib/numbers');
// const res = require('express/lib/response');

router.get('/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a); // eslint-disable-line radix
  const b = parseInt(req.params.b); // eslint-disable-line radix
  res.status(200).json({ result: add(a, b) });
});

module.exports = router;
