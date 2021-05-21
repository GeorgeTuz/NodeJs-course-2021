const router = require('express').Router();
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.json(boards);
});
router.route('/:boardId').get(async (req, res) => {
  const { boardId } = req.params;
  const board = await boardService.getBoardById(boardId);
  if (board) {
    res.json(board);
  } else {
    res.status(404).send("Board with such id not found");
  }
});
router.route('/').post(async (req, res) => {
  const { title, columns } = req.body;
  const board = await boardService.createBoard(title, columns);
  res.status(201).send(board);
});
router.route('/:boardId').put(async (req, res) => {
  const { boardId } = req.params;
  const dataForUpdate = req.body;
  const board = await boardService.updateBoard(boardId, dataForUpdate);
  if (board) {
    res.json(board);
  } else {
    res.status(404).send("Board with such id not found");
  }
});
router.route('/:boardId').delete(async (req, res) => {
  const { boardId } = req.params;
  const board = await boardService.deleteBoard(boardId);
  if (board) {
    res.status(204).send(board);
  } else {
    res.status(404).send("Board with such id not found");
  }
});
module.exports = router;
