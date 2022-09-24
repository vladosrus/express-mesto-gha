const router = require("express").Router();
module.exports = router;

const { updateAvatar } = require("../controllers/users");

router.patch("/", updateAvatar);
