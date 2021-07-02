
const express = require('express');
const { bind } = require('./routes');

const app = express();
const port = 3000;
app.use(express.json());
bind(app);

module.exports = app.listen(port);