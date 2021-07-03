const { check } = require('./controller/healthController');
const { list, lists, create, push, edit, deleteTask, deleteList } = require('./controller/todoListController');

const bind = (app) => {
  app.get('/health', check);
  app.get('/list', list);
  app.get('/lists', lists);
  app.post('/list', create);
  app.delete('/list', deleteList);
  app.post('/task', push);
  app.put('/task', edit);
  app.delete('/task', deleteTask);
};

module.exports = {
  bind,
};
