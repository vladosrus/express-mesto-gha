const router = require('express').Router();
const { updateAvatar } = require('../controllers/users');

module.exports = router;

router.patch('/', updateAvatar);
