const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  todoName: {
    type: String,
    required: true,
  },
  todoDescription: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("data", TodoSchema);
