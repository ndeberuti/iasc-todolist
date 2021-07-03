const { stringify } = require('flatted');
const Task = require('../entities/task');
const todoListRepository = require('../entities/todoListRepository');

// eslint-disable-next-line consistent-return
const addTaskToTodoListService = (id, value) => {
  const todoList = todoListRepository.getTodoListById(id);
  if (todoList) {
    const task = new Task(value);
    todoList.pushTask(task);
    return stringify(todoList);
  }
};

module.exports = {
  addTaskToTodoListService,
};
