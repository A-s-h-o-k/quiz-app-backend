const mong = require("mongoose");

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

module.exports = statModel;
