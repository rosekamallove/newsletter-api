const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const path = require("path");
const { response } = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/subscribe", (req, res) => {
  const { email, js } = req.body;

  const mcData = {
    members: [
      {
        email_address: email,
        status: "pending",
      },
    ],
  };

  const mcDataPost = JSON.stringify(mcData);

  const options = {
    url: "",
    method: "POST",
    headers: {
      Authorization: "auth...",
    },
    body: mcDataPost,
  };

  if (email) {
    request(options, (err, response, body) => {
      if (err) {
        res.json({ error: err });
      } else {
        if (js) {
          res.sendStatus(200);
        }
        res.redirect("/success.html");
      }
    });
  } else {
    res.sendStatus(404);
  }
});

app.listen(PORT, console.log(`server started at port ${PORT}`));
