const { stringify } = require('flatted');
const Task = require('../entities/task');
const todoListRepository = require('../entities/todoListRepository');

// eslint-disable-next-line consistent-return
const addTaskToTodoListService = (todoListId, taskValue) => {
  const todoList = todoListRepository.getTodoListById(todoListId);
  if (todoList) {
    const task = new Task(taskValue);
    todoList.pushTask(task);
    return stringify(todoList);
  }
};

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
  return [];
};

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

const moveTaskService = (todoListId, taskId, before, after) => {
  const todoList = todoListRepository.getTodoListById(todoListId);
  if (todoList) {
    const task = todoList.getTaskById(taskId);
    if (task) {
      const beforeTask = todoList.getTaskById(before);
      if (beforeTask) {
        task.putBefore(beforeTask);
      } else {
        const afterTask = todoList.getTaskById(after);
        if (afterTask) {
          task.putAfter(afterTask);
        }
      }
    }
  }
  return stringify(todoList);
};

module.exports = {
  addTaskToTodoListService,
  deleteTaskService,
  editTaskService,
  moveTaskService,
};
