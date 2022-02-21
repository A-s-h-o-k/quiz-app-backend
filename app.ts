const express = require("express");
const app = express();
const cors = require("cors");
const login = require("./routes/loginRoute");
// console.log(login);

app.use(express.json());
app.use(cors());

app.use("/login", login);
// app.get("/login", (res: any, req: any) => {
//   console.log("connection to post");
// });

app.listen(3001, () => {
  console.log("connected");
});
