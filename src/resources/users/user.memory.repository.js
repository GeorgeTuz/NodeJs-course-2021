const users = [];

const getAll = async () => users;
const getUserById = async (id) => users.find((user) => user.id === id);
const createUser = async (user) => {
  users.push(user);
  return user;
};
const updateUser = async (id, data) => {
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex >= 0) {
    users[userIndex] = {...users[userIndex], ...data};
    return users[userIndex];
  } 
  return null;
};
const deleteUser = async (id) => {
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex >= 0) {
    const deleted = users.splice(userIndex, 1);
    return deleted[0];
  }
  return null;
}

module.exports = { getAll, getUserById, createUser, updateUser, deleteUser };
