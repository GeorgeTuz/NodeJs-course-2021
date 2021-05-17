const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => usersRepo.getAll();
const getUserById = (id) => usersRepo.getUserById(id);
const createUser = (name, login, password) => {
  const user = new User({name, login, password});
  return usersRepo.createUser(user);
};
const updateUser = (id, data) => usersRepo.updateUser(id, data);
const deleteUser = (id) => usersRepo.deleteUser(id);

module.exports = { getAll, getUserById, createUser, updateUser, deleteUser };
