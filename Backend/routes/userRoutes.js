const router = require("express").Router;

router.post("/api/register", (req, res) => {
  res.send("Hello");
});

module.exports = { router };
