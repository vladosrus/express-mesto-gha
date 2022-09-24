const router = require("express").Router();
module.exports = router;

const { likeCard, dislikeCard } = require("../controllers/cards");

router.put("/cards/:cardId/likes", likeCard);
router.delete("/cards/:cardId/likes", dislikeCard);
