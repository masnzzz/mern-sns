const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("auth roter");
});

module.exports = router;
