class TodoListRepository {
  constructor(todoLists = []) {
    this.todoLists = todoLists;
  }

  restoreState(state) {
    this.todoLists = state;
  }

  addTodoList(todoList) {
    this.todoLists.push(todoList);
  }

  getTodoListById(id) {
    return this.todoLists.find((x) => x.id === id);
  }

  showTodoLists() {
    // eslint-disable-next-line no-console
    console.log(this.todoLists);
  }
}

module.exports = new TodoListRepository();
