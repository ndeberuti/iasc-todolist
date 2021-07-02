const uuid = require('../lib/uuid');

class Task {
  constructor(value, lastTask, nextTask) {
    this.id = uuid();
    this.value = value;
    this.lastTask = lastTask;
    this.nextTask = nextTask;
    this.check = false;
  }

  putBefore(task) {
    const taskRef = task;
    if (!this.equals(taskRef)) {
      // Desvinculamos la task de sus posición actual
      this.unlinkTask();

      // Se hubica la task en la posición deseada
      this.lastTask = taskRef.lastTask;
      this.nextTask = taskRef;

      // Modicamos la tasks necesarias
      if (taskRef.lastTask != null) {
        (taskRef.lastTask).nextTask = this;
      }
      taskRef.lastTask = this;
    }
  }

  putAfter(task) {
    const taskRef = task;
    if (!this.equals(taskRef)) {
      // Desvinculamos la task de sus posición actual
      this.unlinkTask();

      // Se hubica la task en la posición deseada
      this.nextTask = task.nextTask;
      this.lastTask = task;

      // Modicamos la tasks necesarias
      if (taskRef.nextTask != null) {
        (taskRef.nextTask).lastTask = this;
      }
      taskRef.nextTask = this;
    }
  }

  // Desvinculamos la task de sus posición actual
  unlinkTask() {
    const last = this.lastTask;
    const next = this.nextTask;
    if (last != null) {
      last.nextTask = next;
    }
    if (next != null) {
      next.lastTask = last;
    }
  }

  equals(task) {
    return this.id === task.id;
  }
}

module.exports = Task;
