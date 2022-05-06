const TodoModel = require("../models/TodoModel");

exports.showIndex = (req, res) => {
  res.send("Running Node API");
};

exports.addTodo = (req, res) => {
  const todo = new TodoModel({
    todoName: req.body.todoName,
    todoDescription: req.body.todoDescription,
  });
  todo
    .save()
    .then((data) => res.send(data))
    .catch((error) => res.send(error));
};

exports.showTodos = (req, res) => {
  TodoModel.find()
    .then((result) => res.send(result))
    .catch((error) => res.status(400).send(error));
};

exports.getTodo = (req, res) => {
  TodoModel.findById(req.params.id)
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};

exports.deleteTodo = (req, res) => {
  TodoModel.deleteOne({ _id: req.params.id }, (error) => {
    if (error) {
      res.send(error);
    }
    res.json({
      status: "Success",
      message: "Successfully deleted todo " + req.params.id,
    });
  });
};

exports.modifyTodo = (req, res) => {
  TodoModel.findById(req.params.id, (error, todo) => {
    if (error) {
      res.send(error);
    }
    (todo.todoName = req.body.todoName ? req.body.todoName : todo.todoName),
      (todo.todoDescription = req.body.todoDescription
        ? req.body.todoDescription
        : todo.todoDescription);
    todo.save((error) => {
      if (error) {
        res.send(error);
      }
      res.json({
        message: "Todo updated successfully",
        data: todo,
      });
    });
  });
};
