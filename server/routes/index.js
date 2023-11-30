// EXPRESS
const express = require("express");
const app = express.Router();

// Routes
const dalleRouter = require("./dalleRouter");

app.use("/api/v1/dalle", dalleRouter);

module.exports = app;
