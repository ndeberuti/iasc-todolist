/* eslint-disable consistent-return */
const {
  addTaskToTodoListService, editTaskService, deleteTaskService, moveTaskService,
} = require('../../services/taskService');
const {
  getListService, getAllListsService, createListService, deleteListService,
} = require('../../services/listService');

const create = async (req, res, next) => {
  try {
    const { owner } = req.body;

    const todoListId = createListService(owner);

    return res.status(200).json({ id: todoListId });
  } catch (error) {
    next(error);
  }
};

const list = async (req, res, next) => {
  try {
    const todoListId = req.params.id;

    const todoListJSON = getListService(todoListId);

    return res.status(200).json({ todoList: todoListJSON });
  } catch (error) {
    next(error);
  }
};

const lists = async (req, res, next) => {
  try {
    const todoListsJSON = getAllListsService();

    return res.status(200).json({ todoLists: todoListsJSON });
  } catch (error) {
    next(error);
  }
};

const push = async (req, res, next) => {
  try {
    const { todoListId, value } = req.body;
    const todoListJSON = addTaskToTodoListService(todoListId, value);
    return res.status(200).json({ todoList: todoListJSON });
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  try {
    const {
      todoListId, taskId, value, check,
    } = req.body;
    const todoListJSON = editTaskService(todoListId, taskId, value, check);

    return res.status(200).json({ todoList: todoListJSON });
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { todoListId, taskId } = req.body;
    const todoListJSON = deleteTaskService(todoListId, taskId);
    return res.status(200).json({ todoList: todoListJSON });
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
    const todoListJSON = moveTaskService(todoListId, taskId, before, after);
    return res.status(200).json({ todoList: todoListJSON });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  list, lists, create, push, edit, deleteTask, deleteList, moveTask,
};
