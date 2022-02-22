const express = require("express");
const app = express();
const cors = require("cors");
const login = require("./routes/loginRoute");
const prop = require("./model/properties");
const mongoose = require("mongoose");
// console.log(login);

app.use(express.json());
app.use(cors());

app.use("/login", login);

app.listen(3001, () => {
  console.log("connected");
});

console.log(prop, "propsssssss");
mongoose.connect("mongodb://localhost:27017/quiz");

mongoose.connection.on("connected", () => {
  console.log("connected to mongo db");
});
