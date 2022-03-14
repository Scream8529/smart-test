const { Schema, model, ObjectId } = require("mongoose");

const User = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  country: { type: String, required: true },
});

module.exports = model("User", User);
