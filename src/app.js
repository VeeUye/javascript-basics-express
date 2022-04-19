const express = require('express');
const res = require('express/lib/response');
const { sayHello } = require('./lib/strings');
const { uppercase } = require('./lib/strings');
const { lowercase } = require('./lib/strings');
const { firstCharacter } = require('./lib/strings');
const { firstCharacters } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

// app.get('/strings/first-characters/:string', (req, res) => {
//   // const queryObjectLength =
//   res.status(200).json({ result: firstCharacter(req.params.string) });
//   console.log(req.query.length);
// });

app.get('/strings/first-characters/:string', (req, res) => {
  const nCharacters = req.query.length;
  if (req.query.length > 0) {
    res.status(200).json({ result: firstCharacters(req.params.string, nCharacters) });
  } else {
    res.status(200).json({ result: firstCharacter(req.params.string) });
  }
});

module.exports = app;
