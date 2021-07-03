const { stringify } = require('flatted');
const todoListRepository = require('../entities/todoListRepository');

const getListService = (todoListId) => {
  const todoLists = todoListRepository.getTodoListById(todoListId);
  return stringify(todoLists);
};

module.exports = {
  getListService,
};
