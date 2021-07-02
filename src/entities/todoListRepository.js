class TodoListRepository {
  constructor(todoList = []) {
    this.todoLists = todoList;
  }

  addTodoList(todoList) {
    this.todoLists.push(todoList);
  }

  getTodoListById(id) {
    return this.todoLists.find((x) => x.id === id);
  }

  showTodoLists() {
    console.log(this.todoLists);
  }
}

module.exports = new TodoListRepository();