const { stringify } = require('flatted');
const todoListRepository = require('../entities/todoListRepository');

const editTaskService = (todoListId, taskId, value) => {
  const todoList = todoListRepository.getTodoListById(todoListId);
  if (todoList) {
    const task = todoList.getTaskById(taskId);
    if (task) {
      task.value = value;
    }
    return stringify(todoList);
  }
};

module.exports = {
  editTaskService,
};
