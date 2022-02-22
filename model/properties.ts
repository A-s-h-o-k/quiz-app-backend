const mongose = require("mongoose");
const properties = {
  DB_URL: "mongodb://localhost:27017/quiz",
};

mongose.connect(properties.DB_URL);
// mongose;
mongose.connection.on("connected", (err: any) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to mongo db");
  }
});
