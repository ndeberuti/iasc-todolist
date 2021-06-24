class Task {
    constructor(value, last_task, next_task) {
        this.value = value;
        this.last_task = last_task;
        this.next_task = next_task;
    }

    putBefore(task) {
        if (this != task) {
            //Desvinculamos la task de sus posición actual
            this.unlinkTask(task);

            //Se hubica la task en la posición deseada
            this.last_task = task.last_task;
            this.next_task = task;

            //Modicamos la tasks necesarias
            if (task.last_task != null) {
                (task.last_task).next_task = this
            }
            task.last_task = this;
        }
    }

    putAfter(task) {
        if (this != task) {
            //Desvinculamos la task de sus posición actual
            this.unlinkTask(task);

            //Se hubica la task en la posición deseada
            this.next_task = task.next_task;
            this.last_task = task;

            //Modicamos la tasks necesarias
            if (task.next_task != null) {
                (task.next_task).last_task = this
            }
            task.next_task = this;
        }
    }

    //Desvinculamos la task de sus posición actual
    unlinkTask(task) {
        let last = this.last_task;
        let next = this.next_task;
        if (last != null) {
            last.next_task = next;
        }
        if (next != null) {
            next.last_task = last;
        }
    }

}