const router = require("express").Router();
const statModels = require("../model/statisticsSchema.js");

router.get("/", async (req, res) => {
  console.log(req.body);
  statModels.find(function (err, response) {
    if (err) console.log(err);
    else res.send(response);
  });
<<<<<<< HEAD
  // res.send({ nothing: "yess" });
=======
>>>>>>> d34fdba736b50b5cbc8ed9d371b3b34fb3f1378f
});

router.post("/", async (req, res) => {
  console.log("--------");
  statModels.find({ name: "ashok" }, function (err, re) {
    if (err) {
      console.log(err);
    } else {
      console.log(re, "=======");
      res.send({ hai: 200 });
    }
  });
});

module.exports = router;
