const express = require('express');
const res = require('express/lib/response'); // is this line necessary? it's never read

const app = express();
app.use('/strings', require('./routes/strings-routes'));

module.exports = app;
