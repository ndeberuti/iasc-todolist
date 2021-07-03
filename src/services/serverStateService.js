const { parse } = require('flatted');
const todoListRepository = require('../entities/todoListRepository');
const { setDownState } = require('../server/middleware/recoveryMiddleware');

const restoreServerStateService = (clientState) => {
  todoListRepository.restoreState(parse(clientState));
  setDownState(false);
  todoListRepository.showTodoLists();
};

module.exports = {
  restoreServerStateService,
};
