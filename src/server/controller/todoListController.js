const { createTodoListService } = require('../../services/createTodoListService');

const create = async (req, res, next) => {
  try {
    return createTodoListService();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};
