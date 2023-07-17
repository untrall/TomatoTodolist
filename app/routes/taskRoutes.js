const express = require('express');
const Task = require('../models/task');
const router = express.Router();
// 处理任务相关的路由

// 创建任务
router.post('/', (req, res) => {
    const { taskName, description, deadline, status } = req.body;
    // console.log(req.body);
    // 创建任务的逻辑处理
    const task = new Task(taskName, description, deadline, status);
    // 返回成功创建的响应
    res.status(201).json({
        message: '任务创建成功',
        task: task
    });
});

// 获取任务列表
router.get('/', (req, res) => {
    // 获取任务列表的逻辑处理
    // ...

    // 返回任务列表数据
    const tasks = [/* 任务列表数据 */];
    res.json(tasks);
});

module.exports = router;
