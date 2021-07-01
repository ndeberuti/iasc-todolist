const TodoList = require('../entities/todoList');

const createTodoListService = (owner) => {
  const todoList = new TodoList(owner);
  console.log(todoList);

  return todoList.id;
};

module.exports = {
  createTodoListService,
};
