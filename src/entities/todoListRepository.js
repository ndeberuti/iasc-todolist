const TodoList = require('./todoList');
const Task = require('./task');

class TodoListRepository {
  constructor(todoLists = []) {
    this.todoLists = todoLists;
  }

  restoreState(state) {
    const lists = state.map((list) => Object.setPrototypeOf(list, TodoList.prototype)).map((list) => {
      list.tasks = list.tasks.map((task) => Object.setPrototypeOf(task, Task.prototype));
      return list;
    });
    this.todoLists = lists;
  }

  addTodoList(todoList) {
    this.todoLists.push(todoList);
  }

  getTodoListById(id) {
    return this.todoLists.find((x) => x.id === id);
  }

  getTodoListByOwner(owner) {
    return this.todoLists.filter((x) => x.owner === owner);
  }

  remove(todoList) {
    const pos = this.todoLists.indexOf(todoList);
    if (pos !== -1) {
      this.todoLists.splice(pos, 1);
    }
  }

  showTodoLists() {
    // eslint-disable-next-line no-console
    console.log(this.todoLists);
  }
}

module.exports = new TodoListRepository();
