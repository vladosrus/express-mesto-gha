const router = require('express').Router();
const {
  getUsers, createUser, getUser, updateUser, updateAvatar,
} = require('../controllers/users');

router.get('/users', getUsers);
router.post('/users', createUser);

router.get('/users/:userId', getUser);

router.patch('/users/me', updateUser);

router.patch('/users/me/avatar', updateAvatar);

module.exports = router;
