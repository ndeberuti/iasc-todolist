const TodoList = require('../entities/todoList');
const todoListRepository = require('../entities/todoListRepository');

const createTodoListService = (owner) => {
  const todoList = new TodoList(owner);
  todoListRepository.addTodoList(todoList);
  todoListRepository.showTodoLists();

  return todoList.id;
};

module.exports = {
  createTodoListService,
};
