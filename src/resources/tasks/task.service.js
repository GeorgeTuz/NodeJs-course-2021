const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

const getAll = () => tasksRepo.getAll();
const getTaskById = (taskId) => tasksRepo.getTaskById(taskId);
const createTask = (boardId, task) => {
  const createdTask = new Task(task);
  return tasksRepo.createTask(boardId, createdTask);
};
const updateTask = (taskId, data) => tasksRepo.updateTask(taskId, data);
const deleteTask = (taskId) => tasksRepo.deleteTask(taskId);

module.exports = { getAll, getTaskById, createTask, updateTask, deleteTask };
