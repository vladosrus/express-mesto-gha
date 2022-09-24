const router = require("express").Router();
module.exports = router;

const { updateUser } = require("../controllers/users");

router.patch("/", updateUser);
