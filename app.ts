const express = require("express");
const app = express();
const cors = require("cors");
const login = require("./routes/loginRoute");
const prop = require("./model/properties");
const mongoose = require("mongoose");
const homeroute = require("./routes/homeRoute");
// console.log(login);

app.use(express.json());
app.use(cors());

app.use("/login", login);
app.use("/", homeroute);
app.listen(3001, () => {
  console.log("connected");
});

console.log(prop, "propsssssss");
try {

  mongoose.connect("mongodb+srv://firstproject11:quizapp11@quiz-app.anilknt.mongodb.net/?retryWrites=true&w=majority",{dbName:"myFirstDatabase"});
} catch(e) {
  console.log(e)
}
mongoose.connection.on("connected", () => {
  console.log("connected to mongo db --------");
});
