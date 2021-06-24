class TodoList {
    constructor(tasks) {
        this.tasks = tasks;
        this.isPublic = false;
    }

    getSortedTasks() {
        return list.tasks.sort(function (a, b) {
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

            if (b.next_task == null) {
                return -1;
            }

            return 0;
        });
    }
}