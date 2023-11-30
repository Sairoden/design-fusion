// LIBRARIES
const xss = require("xss-clean");
const cors = require("cors");
const helmet = require("helmet");

// EXPRESS
const express = require("express");
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

// ROUTES
const routes = require("./routes");
app.use(routes);

module.exports = app;
