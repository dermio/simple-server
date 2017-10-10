const express = require("express");
const morgan = require("morgan");

const app = express();


app.all("/", function (req, res) {
  res.send("Hello world");
});


app.listen(3000, function () {
  console.log("Listening on port 3000");
});