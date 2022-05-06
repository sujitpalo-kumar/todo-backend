const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router.get("/", controller.showIndex);

router.post("/add-todo", controller.addTodo);

router.get("/get-todo/:id", controller.getTodo);

router.get("/show-todos", controller.showTodos);

router.put("/modify-todo/:id", controller.modifyTodo);

router.delete("/delete-todo/:id", controller.deleteTodo);

module.exports = router;
