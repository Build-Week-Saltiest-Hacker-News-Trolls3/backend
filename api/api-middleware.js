const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const logger = (req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url}
    )}\n`
  );
  next();
};

module.exports = server => {
  server.use(logger);
  server.use(cors());
  server.use(helmet());
  server.use(express.json());
};
