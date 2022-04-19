const express = require('express');
// const res = require('express/lib/response');
// is this line necessary? it's never read

const stringsRoute = require('./routes/strings-routes');
const numbersRoute = require('./routes/numbers-routes');

const app = express();

app.use('/strings', stringsRoute);

app.use('/numbers', numbersRoute);

module.exports = app;
