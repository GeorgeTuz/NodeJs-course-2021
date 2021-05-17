const uuid = require('uuid').v4;

class User {
  constructor({
    id = uuid(),
    title = 'TITLE',
    order = 'order',
    description = 'description',
    userId = 'userId', // assignee
    boardId = 'boardId',
    columnId = 'columnId'
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = User;
