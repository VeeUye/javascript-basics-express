const router = require('express').Router();
const {
  getNthElement,
  arrayToCSVString,
  addToArray,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement,
  removeNthElement2,
} = require('../lib/arrays');

router.post('/element-at-index/:index', (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const array = req.body.array;
  // eslint-disable-next-line prefer-destructuring
  const index = req.params.index;

  res.status(200).json({ result: getNthElement(index, array) });
});

router.post('/to-string', (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const array = req.body.array;

  res.status(200).json({ result: arrayToCSVString(array) });
});

router.post('/append', (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const array = req.body.array;
  // eslint-disable-next-line prefer-destructuring
  const value = req.body.value;

  res.status(200).json({ result: addToArray2(value, array) });
});

router.post('/starts-with-vowel', (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const array = req.body.array;

  res.status(200).json({ result: elementsStartingWithAVowel(array) });
});

router.post('/remove-element/', (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const array = req.body.array;
  // eslint-disable-next-line prefer-destructuring
  const index = parseInt(req.query.index, 10);

  console.log(req.query.index);

  return !index
    ? res.status(200).json({
        result: removeNthElement2(0, array),
      })
    : res.status(200).json({
        result: removeNthElement2(index, array),
      });
});

module.exports = router;
