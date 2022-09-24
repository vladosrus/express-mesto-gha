const router = require('express').Router();
const { likeCard, dislikeCard } = require('../controllers/cards');

module.exports = router;

router.put('/cards/:cardId/likes', likeCard);
router.delete('/cards/:cardId/likes', dislikeCard);
