const express = require('express');
const { bind } = require('../routes');
const { setDownState } = require('../middleware/recoveryMiddleware');

const app = express();
const port = 3001;
app.use(express.json());
setDownState(true);

bind(app);

module.exports = app.listen(port);
