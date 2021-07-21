const uuid = require('../lib/uuid');

class TodoList {
  constructor(owner, name = '', tasks = []) {
    this.id = uuid();
    this.owner = owner;
    this.name = name;
    this.tasks = tasks;
    this.isPublic = false;
  }

  removeTask(task) {
    const pos = this.tasks.findIndex((x) => x.equals(task));
    // Avoid remove other task
    if (pos >= 0) {
      this.tasks.splice(pos, 1);
    }
    task.unlinkTask();
  }

  pushTask(task) {
    // Avoid re-insert an existed task
    const exist = this.tasks.find((x) => x.equals(task));
    if (!exist) {
      // Unlink Task
      task.unlinkTask();
      const sortedTasks = this.getSortedTasks();
      const lastTaks = sortedTasks[this.tasks.length - 1];
      if (lastTaks != null) {
        task.putAfter(lastTaks);
      }
      this.tasks.push(task);
    }
  }

  getTaskById(id) {
    return this.tasks.find((x) => x.id === id);
  }

  getSortedTasks() {
    return this.tasks.sort((a, b) => {
      if (a.lastTask == null) {
        return -1;
      }

      if (b.lastTask == null) {
        return 1;
      }

      if (a.nextTask == null) {
        return 1;
      }

      if (b.nextTask == null) {
        return -1;
      }

      if (a.nextTask.equals(b)) {
        return -1;
      }

      if (a.lastTask.equals(b)) {
        return 1;
      }

      if (b.lastTask.equals(a)) {
        return -1;
      }

      if (b.nextTask.equals(a)) {
        return 1;
      }

      return 0;
    });
  }

  toJSON() {
    const tasks = this.getSortedTasks().map((x) => ({ id: x.id, value: x.value, check: x.check }));
    return {
      id: this.id,
      name: this.name,
      owner: this.owner,
      isPublic: this.isPublic,
      tasks,
    };
  }
}

module.exports = TodoList;
