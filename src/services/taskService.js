const { stringify } = require('flatted');
const Task = require('../entities/task');
const todoListRepository = require('../entities/todoListRepository');

// eslint-disable-next-line consistent-return
const addTaskToTodoListService = (todoListId, taskValue) => {
  const todoList = todoListRepository.getTodoListById(todoListId);
  let message = null;
  if (todoList) {
    const task = new Task(taskValue);
    todoList.pushTask(task);
  } else {
    message = 'La lista ya no existe';
  }
  return { message, todoList: (todoList ? todoList.toJSON() : null) };
};

const editTaskService = (todoListId, taskId, value, check) => {
  const todoList = todoListRepository.getTodoListById(todoListId);
  let message = null;
  if (todoList) {
    const task = todoList.getTaskById(taskId);
    if (task) {
      if (value) {
        task.value = value;
      }
      if (check != null) {
        task.check = check;
      }
    } else {
      message = 'La task ya no existe';
    }
  } else {
    message = 'La lista ya no existe';
  }
  return { message, todoList: (todoList ? todoList.toJSON() : null) };
};

const deleteTaskService = (todoListId, taskId) => {
  const todoList = todoListRepository.getTodoListById(todoListId);
  let message = null;
  if (todoList) {
    const task = todoList.getTaskById(taskId);
    if (task) {
      todoList.removeTask(task);
    } else {
      message = 'La task ya no existe';
    }
  } else {
    message = 'La lista ya no existe';
  }
  return { message, todoList: (todoList ? todoList.toJSON() : null) };
};

const moveTaskService = (todoListId, taskId, before, after) => {
  const todoList = todoListRepository.getTodoListById(todoListId);
  let message = null;
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
        } else {
          message = 'Hubo un error al querer mover la task';
        }
      }
    } else {
      message = 'La task ya no existe';
    }
  } else {
    message = 'La lista ya no existe';
  }
  return { message, todoList: (todoList ? todoList.toJSON() : null) };
};

module.exports = {
  addTaskToTodoListService,
  deleteTaskService,
  editTaskService,
  moveTaskService,
};
