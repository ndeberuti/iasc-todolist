const { stringify } = require('flatted');
const todoListRepository = require('../entities/todoListRepository');
const TodoList = require('../entities/todoList');

const createListService = (owner) => {
  const todoList = new TodoList(owner);
  todoListRepository.addTodoList(todoList);
  todoListRepository.showTodoLists();

  return todoList.id;
};

const getListService = (todoListId) => {
  const todoList = todoListRepository.getTodoListById(todoListId);
  console.log('todoList;', todoList);
  return stringify(todoList);
};

const getAllListsService = () => {
  const { todoLists } = todoListRepository;
  return stringify(todoLists);
};

const deleteListService = (todoListId) => {
  const todoList = todoListRepository.getTodoListById(todoListId);
  todoListRepository.remove(todoList);
};

module.exports = {
  createListService,
  getListService,
  getAllListsService,
  deleteListService,
};
