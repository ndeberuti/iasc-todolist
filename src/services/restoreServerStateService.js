const todoListRepository = require('../entities/todoListRepository');
const { setDownState } = require('../server/middleware/recoveryMiddleware');

const restoreServerStateService = (clientState) => {
  todoListRepository.restoreState(clientState);
  setDownState(false);
  todoListRepository.showTodoLists();
};

module.exports = {
  restoreServerStateService,
};
