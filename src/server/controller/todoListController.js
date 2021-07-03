const { createTodoListService } = require('../../services/createTodoListService');

// eslint-disable-next-line consistent-return
const create = async (req, res, next) => {
  try {
    const { owner } = req.body;

    const todoListId = createTodoListService(owner);

    return res.status(200).json({ id: todoListId });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};
