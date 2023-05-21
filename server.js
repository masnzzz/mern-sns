const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const PORT = 3900;
const mongoose = require("mongoose");
require("dotenv").config();

// connect datanase
mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("Conectting DB...");
  }).catch((err) => {
    console.log(err);
});

// middleware
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => console.log("サーバが起動しました。"));
