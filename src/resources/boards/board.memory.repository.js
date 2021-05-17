const boards = [];

const getAll = async () => boards;
const getBoardById = async (id) => boards.find((board) => board.id === id);
const createBoard = async (board) => {
  boards.push(board);
  return board;
};
const updateBoard = async (id, data) => {
  const boardIndex = boards.findIndex((board) => board.id === id);
  if (boardIndex >= 0) {
    boards[boardIndex] = {...boards[boardIndex], ...data};
    return boards[boardIndex];
  } 
  return null;
};
const deleteBoard = async (id) => {
  const boardIndex = boards.findIndex((board) => board.id === id);
  if (boardIndex >= 0) {
    const deleted = boards.splice(boardIndex, 1);
    return deleted[0];
  }
  return null;
}

module.exports = { getAll, getBoardById, createBoard, updateBoard, deleteBoard };
