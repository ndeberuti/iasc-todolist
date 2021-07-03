const { stringify } = require('flatted');
const todoListRepository = require('../entities/todoListRepository');

const editTaskService = (todoListId, taskId, value, check) => {
  const todoList = todoListRepository.getTodoListById(todoListId);
  if (todoList) {
    const task = todoList.getTaskById(taskId);
    if (task) {
      if (value) {
        task.value = value;
      }
      if (check != null) {
        task.check = check;
      }
    }
    return stringify(todoList);
  }
};

module.exports = {
  editTaskService,
};
