const { check } = require('./controller/healthController');
const { list, lists, create, push, edit, deleteTask, deleteList } = require('./controller/todoListController');
const { restore } = require('./controller/serverController');
const { recoveryMiddleware } = require('./middleware/recoveryMiddleware');

const bind = (app) => {
  app.get('/health', recoveryMiddleware, check);
  app.get('/list', recoveryMiddleware, list);
  app.get('/lists', recoveryMiddleware, lists);
  app.post('/list', recoveryMiddleware, create);
  app.delete('/list', recoveryMiddleware, deleteList);
  app.post('/task', recoveryMiddleware, push);
  app.put('/task', recoveryMiddleware, edit);
  app.delete('/task', recoveryMiddleware, deleteTask);
  app.post('/server/restore', restore);
};

module.exports = {
  bind,
};
