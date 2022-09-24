const router = require('express').Router();
const { getCards, createCard } = require('../controllers/cards');

module.exports = router;

router.get('/', getCards);
router.post('/', createCard);
