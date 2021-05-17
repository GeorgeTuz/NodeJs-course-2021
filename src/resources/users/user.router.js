const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});
router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getUserById(id);
  if (user) {
    // res.status(201).send('Created');
    res.json(User.toResponse(user));
  } else {
    res.json("User with such id not found");
  }
});
router.route('/').post(async (req, res) => {
  const { name, login, password } = req.body;
  const newUser = new User({name, login, password})
  const user = await usersService.createUser(newUser);
  res.json(User.toResponse(user));
});
router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const dataForUpdate = req.body;
  const user = await usersService.updateUser(id, dataForUpdate);
  if (user) {
    res.json(User.toResponse(user));
  } else {
    res.json("User with such id not found");
  }
});
router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.deleteUser(id);
  if (user) {
    res.json(User.toResponse(user));
  } else {
    res.json("User with such id not found");
  }
});
module.exports = router;
