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
