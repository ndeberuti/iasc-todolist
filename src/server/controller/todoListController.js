const { createTodoListService } = require('../../services/createTodoListService');

const create = async (req, res, next) => {
  try {
    const { owner } = req.body;

    return createTodoListService(owner);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};
