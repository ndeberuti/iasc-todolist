const { stringify } = require('flatted');
const todoListRepository = require('../entities/todoListRepository');

const deleteTaskService = (todoListId, taskId) => {
  const todoList = todoListRepository.getTodoListById(todoListId);
  if (todoList) {
    const task = todoList.getTaskById(taskId);
    if (task) {
      todoList.removeTask(task);
    }
  }
  return stringify(todoList);
};

module.exports = {
  deleteTaskService,
};
