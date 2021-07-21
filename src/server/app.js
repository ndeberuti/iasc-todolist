const express = require('express');
const cors = require('cors');
const { bind } = require('./routes');

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
bind(app);

module.exports = app.listen(port);
