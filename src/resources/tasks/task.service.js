const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

const getAll = () => tasksRepo.getAll();
const getTaskById = (id) => tasksRepo.getTaskById(id);
const createTask = (
  title,
  order,
  description,
  userId,
  boardId,
  columnId
) => {
  const task = new Task({
    title,
    order,
    description,
    userId,
    boardId,
    columnId
  });
  return tasksRepo.createTask(task);
};
const updateTask = (id, data) => tasksRepo.updateTask(id, data);
const deleteTask = (id) => tasksRepo.deleteTask(id);

module.exports = { getAll, getTaskById, createTask, updateTask, deleteTask };
