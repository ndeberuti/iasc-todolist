const express = require('express');
const cors = require('cors');
const { bind } = require('../routes');
const { setDownState } = require('../middleware/recoveryMiddleware');

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());
setDownState(true);

bind(app);

module.exports = app.listen(port);
