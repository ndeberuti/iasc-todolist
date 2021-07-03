const todoListRepository = require('../entities/todoListRepository');

const deleteListService = (todoListId) => {
  const todoList = todoListRepository.getTodoListById(todoListId);
  todoListRepository.remove(todoList);
};

module.exports = {
  deleteListService,
};
