const router = require("express").Router();
module.exports = router;

const { getUser } = require("../controllers/users");
router.get("/users/:userId", getUser);
