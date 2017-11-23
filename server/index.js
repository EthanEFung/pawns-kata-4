const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = 3000;
const app = express();

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, "../", "client")));

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, err => {
  if (err) throw new Error("could not connect");
  console.log("connected on port", PORT);
});
