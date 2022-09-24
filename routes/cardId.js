const router = require("express").Router();
module.exports = router;

const { deleteCard } = require("../controllers/cards");

router.delete("/cards/:cardId", deleteCard);
