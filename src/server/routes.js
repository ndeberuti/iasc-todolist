const { check } = require('./controller/healthController');
const { create, push, edit, deleteTask } = require('./controller/todoListController');

const bind = (app) => {
  app.get('/health', check);
  app.post('/list', create);
  app.post('/task', push);
  app.put('/task', edit);
  app.delete('/task', deleteTask);
};

module.exports = {
  bind,
};
