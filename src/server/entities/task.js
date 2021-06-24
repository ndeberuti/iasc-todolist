class Task {
    constructor(value, lastTask, nextTask) {
        this.value = value;
        this.lastTask = lastTask;
        this.nextTask = nextTask;
    }

    putBefore(task) {
        if (this != task) {
            //Desvinculamos la task de sus posición actual
            this.unlinkTask(task);

            //Se hubica la task en la posición deseada
            this.lastTask = task.lastTask;
            this.nextTask = task;

            //Modicamos la tasks necesarias
            if (task.lastTask != null) {
                (task.lastTask).nextTask = this
            }
            task.lastTask = this;
        }
    }

    putAfter(task) {
        if (this != task) {
            //Desvinculamos la task de sus posición actual
            this.unlinkTask(task);

            //Se hubica la task en la posición deseada
            this.nextTask = task.nextTask;
            this.lastTask = task;

            //Modicamos la tasks necesarias
            if (task.nextTask != null) {
                (task.nextTask).lastTask = this
            }
            task.nextTask = this;
        }
    }

    //Desvinculamos la task de sus posición actual
    unlinkTask(task) {
        let last = this.lastTask;
        let next = this.nextTask;
        if (last != null) {
            last.nextTask = next;
        }
        if (next != null) {
            next.lastTask = last;
        }
    }

}