const express = require("express");
const app = express();
const port = 4000;

/*
const usersRouter = require("./routes/Users");

app.use("/user", usersRouter);
*/

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`example on port ${port}!`);
});
