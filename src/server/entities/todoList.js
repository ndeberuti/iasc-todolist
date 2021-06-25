class TodoList {
    constructor(tasks) {
        this.tasks = tasks;
        this.isPublic = false;
    }

    removeTask(task) {
        const pos = this.tasks.indexOf(task);
        //Avoid remove other task
        if (pos >= 0) {
            this.tasks.splice(pos, 1);
        }
        task.unlinkTask();
    }

    pushTask(task) {
        //Unlink Task
        task.unlinkTask();

        //Avoid re-insert an existed task
        const exist = this.tasks.indexOf(task) >= 0;
        if (!exist) {
            const sortedTasks = this.getSortedTasks();
            const lastTaks = this.tasks[this.tasks.length - 1];
            if (lastTaks != null) {
                task.putAfter(lastTaks);
            }
            this.tasks.push(task);
        }
    }

    getSortedTasks() {
        return this.tasks.sort(function (a, b) {
            if (a.lastTask == null) {
                return -1;
            }

            if (b.lastTask == null) {
                return 1;
            }

            if (a.nextTask == b) {
                return -1;
            }

            if (a.lastTask == b) {
                return 1;
            }

            if (b.lastTask == a) {
                return -1;
            }

            if (b.nextTask == a) {
                return 1;
            }

            if (a.nextTask == null) {
                return 1;
            }

            if (b.nextTask == null) {
                return -1;
            }

            return 0;
        });
    }
}