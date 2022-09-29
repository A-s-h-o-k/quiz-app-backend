const mongo = require("mongoose");
const propertiesUrl = require("./properties").DB_URL;

const userSchema = new mongo.Schema({
  name: {
    type: String,
    require: true,
  },
  age:{type:Number}
});

const statModel = mongo.model("data", userSchema);

module.exports = userModal;
