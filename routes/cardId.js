const router = require('express').Router();
const { deleteCard } = require('../controllers/cards');

module.exports = router;

router.delete('/cards/:cardId', deleteCard);
