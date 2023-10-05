const express = require("express");
const {userRegister, userAuth} = require("../controllers/userController");
const router = express.Router();

router.route("/").post(userRegister);
router.route("/login").post(userAuth);

module.exports = router;
