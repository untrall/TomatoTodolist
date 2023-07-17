const express = require('express');
const Task = require('../models/task');
const router = express.Router();
// 处理任务相关的路由
const taskList = []
// 创建任务
router.post('/', (req, res) => {
    const { taskName, description, deadline, status } = req.body;
    console.log(req.body);
    // 创建任务的逻辑处理
    const task = new Task(taskName, description, deadline, status);
    // 返回成功创建的响应
    taskList.push(task);
    res.status(201).json({
        message: '任务创建成功',
        task: task
    });
});

// 获取任务列表
router.get('/', (req, res) => {
    // 获取任务列表的逻辑处理
    // ...
    taskList.sort((task1, task2) => {
        const deadline1 = new Date(task1.deadline);
        const deadline2 = new Date(task2.deadline);
        
        return deadline1 - deadline2;
      });
      
    // 返回任务列表数据
    res.json(taskList);
});

module.exports = router;
