const router = require("express").Router();
const statModels = require("../model/statisticsSchema.js");

router.get("/", async (req, res) => {
  console.log(req.body);
  statModels.find(function (err, response) {
    if (err) console.log(err);
    else res.send(response);
  });
});

router.post("/", async (req, res) => {
  console.log("--------");
  statModels.find({ name: "shiva" }, function (err, re) {
    if (err) {
      console.log(err);
    } else {
      console.log(re, "=======");
      res.send({ hai: 200 });
    }
  });
});

module.exports = router;
