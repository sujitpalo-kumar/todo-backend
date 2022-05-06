const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

const app = express();

app.use(express.json());

app.use("/", routes);

const url =
  "mongodb+srv://sujit12345:kumar@cluster0.7pveg.mongodb.net/TODO?retryWrites=true&w=majority";

mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
