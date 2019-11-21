const express = require("express");

const apiRouter = require("./api-router");
const middleware = require("./api-middleware");

const server = express();

middleware(server);

server.use("/api", apiRouter);

module.exports = server;
