const router = require("express").Router();
const { getUsers, createUser } = require("../controllers/users");
module.exports = router;

router.get("/", getUsers);
router.post("/", createUser);
