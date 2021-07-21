/* eslint-disable consistent-return */
const {
  addTaskToTodoListService, editTaskService, deleteTaskService, moveTaskService,
} = require('../../services/taskService');
const {
  getListService, getAllListsService, createListService, deleteListService,
} = require('../../services/listService');

const create = async (req, res, next) => {
  try {
    const { owner, name } = req.body;

    const todoListId = createListService(owner, name);

    return res.status(200).json({ id: todoListId });
  } catch (error) {
    next(error);
  }
};

const list = async (req, res, next) => {
  try {
    const todoListId = req.params.id;

    const { message, todoList } = getListService(todoListId);

    return res.status(message ? 409 : 200).json({ message, todoList });
  } catch (error) {
    next(error);
  }
};

const lists = async (req, res, next) => {
  try {
    const { todoLists, store } = getAllListsService();

    return res.status(200).json({ todoLists, store });
  } catch (error) {
    next(error);
  }
};

const push = async (req, res, next) => {
  try {
    const { todoListId, value } = req.body;
    const { message, todoList } = addTaskToTodoListService(todoListId, value);
    return res.status(message ? 409 : 200).json({ message, todoList });
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  try {
    const {
      todoListId, taskId, value, check,
    } = req.body;
    const { message, todoList } = editTaskService(todoListId, taskId, value, check);

    return res.status(message ? 409 : 200).json({ message, todoList });
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { todoListId, taskId } = req.body;
    const { message, todoList } = deleteTaskService(todoListId, taskId);
    return res.status(message ? 409 : 200).json({ message, todoList });
  } catch (error) {
    next(error);
  }
};

const deleteList = async (req, res, next) => {
  try {
    const { todoListId } = req.body;
    deleteListService(todoListId);
    return res.status(200).json({ message: 'OK' });
  } catch (error) {
    next(error);
  }
};

const moveTask = async (req, res, next) => {
  try {
    const {
      todoListId, taskId, before, after,
    } = req.body;
    const { message, todoList } = moveTaskService(todoListId, taskId, before, after);
    return res.status(message ? 409 : 200).json({ message, todoList });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  list, lists, create, push, edit, deleteTask, deleteList, moveTask,
};
