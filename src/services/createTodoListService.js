const TodoList = require('../entities/todoList');

const createTodoListService = (owner) => {
  const todoList = new TodoList(owner);
  console.log(todoList);

  return todoList;
};

module.exports = {
  createTodoListService,
};
