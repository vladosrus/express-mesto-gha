const router = require('express').Router();
const { getUser } = require('../controllers/users');

module.exports = router;

router.get('/users/:userId', getUser);
