const boardsRepo = require('./board.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository')
const Board = require('./board.model');

const getAll = () => boardsRepo.getAll();
const getBoardById = (id) => boardsRepo.getBoardById(id);
const createBoard = (title, columns) => {
  const board = new Board({title, columns});
  return boardsRepo.createBoard(board);
};
const updateBoard = (id, data) => boardsRepo.updateBoard(id, data);
const deleteBoard = async (id) => {
  await tasksRepo.deleteTaskByBoardId(id);
  return boardsRepo.deleteBoard(id);
}

module.exports = { getAll, getBoardById, createBoard, updateBoard, deleteBoard };
