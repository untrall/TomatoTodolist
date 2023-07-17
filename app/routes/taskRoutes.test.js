// taskRoutes.test.js
const Task = require('../models/task');
const request = require('supertest');
const app = require('../../index'); // 导入正确的应用程序实例

const taskRoutes = require('../routes/taskRoutes');

// 注册路由
app.use('/tasks', taskRoutes);

describe('POST /tasks', () => {
  it('should create a new task', async () => {
    const taskData = {
      taskName: 'Task 1',
      description: 'Sample task',
      deadline: '2023-07-31',
      status: 'pending'
    };

    const response = await request(app)
      .post('/tasks')
      .send(taskData);
    console.log(response.body.task);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('message', '任务创建成功');
  });
});
