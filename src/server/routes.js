const { check } = require('./controller/healthController');
const { create, push, edit } = require('./controller/todoListController');

const bind = (app) => {
  app.get('/health', check);
  app.post('/list', create);
  app.post('/task', push);
  app.put('/task', edit);
};

module.exports = {
  bind,
};
