class TodoListRepository {
  constructor(todoList = []) {
    this.todoLists = todoList;
  }

  addTodoList(todoList) {
    this.todoLists.push(todoList);
  }

  showTodoLists() {
    console.log(this.todoLists);
  }
}

module.exports = new TodoListRepository();
