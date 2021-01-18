const mongoose = require("mongoose");

var casamentosSchema = new mongoose.Schema({
  _id: String,
  date: String,
  title: String,
  ref: String,
  href: String,
});

module.exports = mongoose.model("Casamentos", casamentosSchema, "Casamentos");
