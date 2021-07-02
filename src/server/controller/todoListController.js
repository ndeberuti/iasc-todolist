const { createTodoListService } = require('../../services/createTodoListService');
const { addTaskToTodoListService } = require('../../services/addTaskToTodoListService');
const { editTaskService } = require('../../services/editTaskService');
const { deleteTaskService } = require('../../services/deleteTaskService');

const create = async (req, res, next) => {
  try {
    const { owner } = req.body;

    const todoListId = createTodoListService(owner);

    return res.status(200).json({ id: todoListId });
  } catch (error) {
    next(error);
  }
};

const push = async (req, res, next) => {
  try {
    const { todoListId, value } = req.body;
    const todoListJSON = addTaskToTodoListService(todoListId, value);
    return res.status(200).json({ todoListId: todoListJSON });
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
    return res.status(200).json({ todoListId: todoListJSON });
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { todoListId, taskId } = req.body;
    const todoListJSON = deleteTaskService(todoListId, taskId);
    return res.status(200).json({ todoListId: todoListJSON });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create, push, edit, deleteTask,
};
