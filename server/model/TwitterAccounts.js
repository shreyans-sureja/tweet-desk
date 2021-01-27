const mongoose = require("mongoose");

const TwitteraAccountSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    min: 1,
  },
  token: {
    type: String,
    required: true,
    min: 5,
  },
  token_secret: {
    type: String,
    required: true,
    min: 5,
  },
});

module.exports = mongoose.model("TwitterAccounts", TwitteraAccountSchema);
