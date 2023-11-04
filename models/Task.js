const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
  description: String,
});

module.exports = mongoose.model("Task", taskSchema);
