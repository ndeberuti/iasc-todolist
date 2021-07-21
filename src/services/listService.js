const { stringify } = require('flatted');
const todoListRepository = require('../entities/todoListRepository');
const TodoList = require('../entities/todoList');

const createListService = (owner, name) => {
  const todoList = new TodoList(owner, name);
  if (name) {
    todoList.name = name;
  }
  todoListRepository.addTodoList(todoList);
  todoListRepository.showTodoLists();

  return todoList.id;
};

const getListService = (todoListId) => {
  const todoList = todoListRepository.getTodoListById(todoListId);
  let message = null;
  if (!todoList) {
    message = 'La lista ya no existe';
  }
  return { message, todoList: (todoList ? todoList.toJSON() : null) };
};

const getAllListsService = () => {
  const { todoLists } = todoListRepository;
  return { todoLists: todoLists.map((x) => x.toJSON()), store: stringify(todoLists) };
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
