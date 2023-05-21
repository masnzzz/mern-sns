const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("post roter");
});

module.exports = router;
