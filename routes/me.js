const router = require('express').Router();
const { updateUser } = require('../controllers/users');

module.exports = router;

router.patch('/', updateUser);
