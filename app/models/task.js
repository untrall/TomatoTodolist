const {v4: uuidv4} = require('uuid');

class Task {
    constructor(taskName, description, deadline, status) {
      this.taskId = this.generateTaskId();
      this.taskName = taskName;
      this.description = description;
      this.deadline = deadline;
      this.status = status;
    }

    generateTaskId() {
        return uuidv4();
    }
  }
  
module.exports = Task;
  