let tasks = [];

const getAll = async () => tasks;
const getTaskById = async (taskId) => tasks.find((task) => task.id === taskId);
const createTask = async (boardId, task) => {
  const newTask = {...task, boardId};
  tasks.push(newTask);
  return newTask;
};
const updateTask = async (taskId, data) => {
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex >= 0) {
    tasks[taskIndex] = {...tasks[taskIndex], ...data};
    return tasks[taskIndex];
  } 
  return null;
};
const deleteTask = async (taskId) => {
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex >= 0) {
    const deleted = tasks.splice(taskIndex, 1);
    return deleted[0];
  }
  return null;
};
const deleteTaskByUserId = async (userId) => {
  tasks.forEach((task, i) => {
    if (task.userId === userId) {
      tasks[i].userId = null;
    }
  });
};
const deleteTaskByBoardId = async (boardId) => {
  tasks = tasks.filter((task) => task.boardId !== boardId);
};

module.exports = { getAll, getTaskById, createTask, updateTask, deleteTask, deleteTaskByUserId, deleteTaskByBoardId };
