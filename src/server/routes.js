const { check } = require('./controller/healthController');
const { create } = require('./controller/todoListController');

const bind = (app) => {
  app.get('/health', check);
  app.post('/list', create);
};

module.exports = {
  bind,
};
