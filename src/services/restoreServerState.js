const todoListRepository = require('../entities/todoListRepository');

const restoreServerState = (clientState) => {
  todoListRepository.restoreState(clientState);
  todoListRepository.showTodoLists();
};

module.exports = {
  restoreServerState,
};
