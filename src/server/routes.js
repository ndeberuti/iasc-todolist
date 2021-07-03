const { check } = require('./controller/healthController');
const { create } = require('./controller/todoListController');
const { restore } = require('./controller/serverController');

const { recoveryMiddleware } = require('./middleware/recoveryMiddleware');

const bind = (app) => {
  app.get('/health', recoveryMiddleware, check);
  app.post('/list', recoveryMiddleware, create);
  app.post('/server/restore', restore);
};

module.exports = {
  bind,
};
