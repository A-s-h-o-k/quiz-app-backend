const mongose = require("mongose");
const properties = {
  DB_URL: "mongodb://localhost:27017/quiz",
};

mongose.connect(properties.DB_URL);
mongose.connection.on("connected", () => {
  console.log("connected to mongo db");
});
