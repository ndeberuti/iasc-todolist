const express = require('express');
const path = require('path');
const { bind } = require('./routes');

const app = express();

bind(app);

app.use('*', express.static(path.join(__dirname, '/views'), { index: 'NotFound.html' }));

const port = 5000;
module.exports = app.listen(port);
