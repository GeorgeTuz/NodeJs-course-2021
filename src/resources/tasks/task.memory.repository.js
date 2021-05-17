const tasks = [];

const getAll = async () => tasks;
const getTaskById = async (id) => tasks.find((task) => task.id === id);
const createTask = async (task) => {
  tasks.push(task);
  return task;
};
const updateTask = async (id, data) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex >= 0) {
    tasks[taskIndex] = {...tasks[taskIndex], ...data};
    return tasks[taskIndex];
  } 
  return null;
};
const deleteTask = async (id) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex >= 0) {
    const deleted = tasks.splice(taskIndex, 1);
    return deleted[0];
  }
  return null;
}

module.exports = { getAll, getTaskById, createTask, updateTask, deleteTask };
