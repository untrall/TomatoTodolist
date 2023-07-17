const express = require('express');
const app = express();
const port = 3000;

// 设置中间件
app.use(express.json());

// 引入所需的类和模块
const Task = require('./app/models/task.js');
const Timer = require('./app/models/timer.js');
const taskRoutes = require('./app/routes/taskRoutes');
const timerRoutes = require('./app/routes/timerRoutes');

// 路由定义
app.use('/tasks', taskRoutes);
app.use('/timers', timerRoutes);

// 启动服务器
app.listen(port, () => {
  console.log(`应用程序已启动，监听端口 ${port}`);
});

module.exports = app;
