const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:Vivek7680@cluster0.nbynzh8.mongodb.net/todos"
);
const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});
const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo,
};
