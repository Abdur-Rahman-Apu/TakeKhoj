const express = require("express");
const { registerUser } = require("../Controller/userControllers");

const router = express.Router();

router.route("/").post(registerUser);

module.exports = router;
