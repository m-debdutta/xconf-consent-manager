const express = require("express");

const createApp = () => {
  const app = express();

  app.use(express.static("public"));
  app.get("/", (req, res) => res.json({ message: "Hello world" }));

  return app;
};

module.exports = { createApp };
