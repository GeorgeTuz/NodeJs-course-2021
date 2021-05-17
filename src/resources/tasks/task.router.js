const router = require('express').Router();
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks);
});
router.route('/:taskId').get(async (req, res) => {
  const { id } = req.params;
  const task = await tasksService.getTaskById(id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).send("Task with such id not found");
  }
});
router.route('/').post(async (req, res) => {
  const {
    title,
    order,
    description,
    userId,
    boardId,
    columnId
  } = req.body;
  const task = await tasksService.createTask(
    title,
    order,
    description,
    userId,
    boardId,
    columnId
  );
  res.status(201).send(task);
});
router.route('/:taskId').put(async (req, res) => {
  const { id } = req.params;
  const dataForUpdate = req.body;
  const task = await tasksService.updateTask(id, dataForUpdate);
  if (task) {
    res.json(task);
  } else {
    res.status(404).send("Task with such id not found");
  }
});
router.route('/:taskId').delete(async (req, res) => {
  const { id } = req.params;
  const task = await tasksService.deleteTask(id);
  if (task) {
    res.status(204).send(task);
  } else {
    res.status(404).send("Task with such id not found");
  }
});
module.exports = router;
