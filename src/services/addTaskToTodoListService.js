const { stringify } = require('flatted');
const Task = require('../entities/task');
const todoListRepository = require('../entities/todoListRepository');

const addTaskToTodoListService = (id) => {
  const todoList = todoListRepository.getTodoListById(id);
  if (todoList) {
    const task = new Task('', null, null);
    todoList.pushTask(task);
    return stringify(todoList);
  }
};

module.exports = {
  addTaskToTodoListService,
};
