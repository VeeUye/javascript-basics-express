const express = require('express');
// const res = require('express/lib/response');
// is this line necessary? it's never read

const stringsRoute = require('./routes/strings-routes');
const numbersRoute = require('./routes/numbers-routes');
const booleansRoute = require('./routes/booleans-routes');
const arraysRoute = require('./routes/arrays-routes');

const app = express();

app.use(express.json());

app.use('/strings', stringsRoute);

app.use('/numbers', numbersRoute);

app.use('/booleans', booleansRoute);

app.use('/arrays', arraysRoute);

module.exports = app;
