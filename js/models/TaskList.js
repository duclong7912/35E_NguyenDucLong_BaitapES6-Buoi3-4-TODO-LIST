export class TaskList {
    arrTask = [];
    arrCompletedTask = [];
    addTask(newTask) {
        this.arrTask.push(newTask);
    }

    setLocalStorage() {
        let sArrTask = JSON.stringify(this.arrTask);
        localStorage.setItem("arrTask", sArrTask);
    }
    getLocalStorage() {
        if (localStorage.getItem("arrTask")) {
            this.arrTask = JSON.parse(localStorage.getItem("arrTask"));
        }
    }

    deleteTask(id, arr) {
        let indexTask = arr.findIndex(task => task.id == id);
        if (indexTask !== -1) {
            arr.splice(indexTask, 1)
        }
    }

    taskCompleted (id) {
        let task = this.arrTask.find(task => task.id == id);
        if (task) {
            this.arrCompletedTask.push(task);
        }
    }

    renderTask(selector, arr) {
        let html = arr.reduce((content, task) => {
            return content += `
            <li>
            <span>${task.task}</span>
            <div class="buttons">
                <button>
                    <i class="fa-regular fa-trash-can remove" onclick="delTask('${task.id}')"></i>
                </button>
                <button class='complete'>
                  <i class="fa-regular fa-circle-check far completedBtn" onclick="completedTask('${task.id}')"></i>
                  <i class="fa-solid fa-circle-check fas"></i>
                </button>
            </div>
            </li>
            `;
        }, '');
        document.querySelector(selector).innerHTML = html
    }

    setCompletedTask() {
        let sArrCompletedTask = JSON.stringify(this.arrCompletedTask);
        localStorage.setItem("arrCompletedTask", sArrCompletedTask);
    }
    getCompletedTask() {
        if (localStorage.getItem("arrCompletedTask")) {
            this.arrCompletedTask = JSON.parse(localStorage.getItem("arrCompletedTask"));
        }
    }

    sortTaskAZ() {
        this.arrTask.sort((task2, task1) => {
            let taskName2 = task2.task.toLowerCase().trim(); 
            let taskName1 = task1.task.toLowerCase().trim(); 
            if (taskName2 < taskName1) {
                return -1;
            }
            return 1;
        })
    }
    
    sortTaskZA() {
        this.arrTask.sort((task2, task1) => {
            let taskName2 = task2.task.toLowerCase().trim(); 
            let taskName1 = task1.task.toLowerCase().trim(); 
            if (taskName2 < taskName1) {
                return 1;
            }
            return -1;
        })
    }

}