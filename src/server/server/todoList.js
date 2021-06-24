class TodoList {
    constructor(tasks) {
        this.tasks = tasks;
        this.isPublic = false;
    }

    getSortedTasks() {
        return list.tasks.sort(function (a, b) {
            if (a.last_task == null) {
                return -1;
            }

            if (b.last_task == null) {
                return 1;
            }

            if (a.next_task == b) {
                return -1;
            }

            if (a.last_task == b) {
                return 1;
            }

            if (b.last_task == a) {
                return -1;
            }

            if (b.next_task == a) {
                return 1;
            }

            if (a.next_task == null) {
                return 1;
            }

            if (b.next_task == null) {
                return -1;
            }

            return 0;
        });
    }
}