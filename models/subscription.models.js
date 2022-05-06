const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

mongoose.createConnection(process.env.mongooseUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const schema = new mongoose.Schema({
  email: "string",
});

const Subscription = mongoose.model("Subscription", schema);

module.exports = { Subscription };
