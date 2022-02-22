const mong = require("mongoose");
const propertiesUrl = require("./properties").DB_URL;

const statSchema = new mong.Schema({
  name: {
    type: String,
    require: true,
  },
  phNum: { type: Number, require: true },
  time: { type: Date, require: true },
  score: { type: Number, require: true },
});

const statModel = mong.model("statistics", statSchema);

mong.connect(propertiesUrl);
// mongose;
mong.connection.on("connected", (err: any) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to mongo db");
  }
});

module.exports = statModel;
