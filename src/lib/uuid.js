const { v4: uuidv4 } = require('uuid');

const uuid = () => uuidv4().split('-').join('');

module.exports = uuid;
