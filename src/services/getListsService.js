const { stringify } = require('flatted');
const todoListRepository = require('../entities/todoListRepository');

const getListsService = () => {
  const { todoLists } = todoListRepository;
  return stringify(todoLists);
};

module.exports = {
  getListsService,
};
