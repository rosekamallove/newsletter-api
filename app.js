const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/subscribe", (req, res) => {
  console.log(req.body);
  res.send("Hello");
});

app.listen(PORT, console.log(`server started at port ${PORT}`));
