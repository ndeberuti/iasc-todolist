const TodoList = require('../entities/todoList');

const createTodoListService = () => {
  const todoList = new TodoList();
  console.log(todoList);

  return todoList;
};

module.exports = {
  createTodoListService,
};
