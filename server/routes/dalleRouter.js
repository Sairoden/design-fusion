// EXPRESS
const express = require("express");
const router = express.Router();

// CONTROLLERS
const { getPrompt, createPrompt } = require("../controllers/dalleController");

router.route("/").get(getPrompt).post(createPrompt);

module.exports = router;
