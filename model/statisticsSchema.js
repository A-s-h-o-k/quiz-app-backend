const mong = require("mongoose");
const statSchema = mong.Schema({
  name: {
    require: true,
    type: String,
  },
  phNum: {
    require: true,
    type: Number,
  },
  time: {
    require: true,
    type: Date,
  },
  score: {
    require: true,
    type: Number,
  },
});
const statModel = mong.model("statistics", statSchema);
module.exports = statModel;
