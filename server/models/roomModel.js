const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
});

module.exports = mongoose.model("Rooms", roomSchema);
