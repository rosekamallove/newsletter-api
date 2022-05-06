// NPM
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
dotenv.config(); // NPM
dotenv.config();

const Subscription = require("./models/subscription.models");
const validateEmail = require("./util");

mongoose.connect(process.env.mongooseUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let app = express();
let port = 3000;
let jsonParser = bodyParser.json();

app.use(express.static("public"));

app.post("/subscribe/email", jsonParser, async function (req, res) {
  try {
    let checkSubscription = await Subscription.Subscription.find({
      email: req.body.email,
    });

    if (checkSubscription.length === 0) {
      if (validateEmail(req.body.email)) {
        const newSubscription = new Subscription.Subscription({
          email: req.body.email,
        });
        newSubscription.save(function (err) {
          if (err) {
            res
              .status(400)
              .send({ message: "Error saving your email.", code: "02" });
          } else {
            res
              .status(200)
              .send({ message: "User has subscribed.", code: "03" });
          }
        });
      } else {
        res
          .status(400)
          .send({ message: "Error saving your email.", code: "02" });
      }
    } else {
      res.status(201).send({ message: "User Already Subscribed.", code: "02" });
    }
  } catch (e) {
    console.log(e);
  }
});

app.get("/unsubscribe/:email", async (req, res) => {
  if (typeof req.params.email !== "undefined") {
    let findEmail = await Subscription.Subscription.find({
      email: req.params.email,
    });

    if (findEmail.length > 0) {
      await Subscription.Subscription.deleteOne({ email: req.params.email });
      res.send({ message: "Email deleted.", code: "00" });
    } else {
      res.send({ message: "Email doesn't exist.", code: "01" });
    }
  }
});

app.listen(port);
