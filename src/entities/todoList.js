const uuid = require('../lib/uuid');

class TodoList {
  constructor(owner, tasks = []) {
    this.id = uuid();
    this.owner = owner;
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
    const exist = this.tasks.findIndex((x) => x.equals(task)) >= 0;
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
}

module.exports = TodoList;
