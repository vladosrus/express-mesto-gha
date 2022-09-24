const router = require("express").Router();
module.exports = router;

const { getCards, createCard } = require("../controllers/cards");

router.get("/", getCards);
router.post("/", createCard);
