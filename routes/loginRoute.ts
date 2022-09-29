const router = require("express").Router();
const userModal = require("../model/statisticsSchema.js");

router.get("/", async (req, res) => {
  console.log(req.body);
  userModal.find(function (err, response) {
    if (err) console.log(err);
    else res.send(response);
  });
  // res.send({ nothing: "yess" });
});

router.post("/", async (req, res) => {
  console.log("in login route--------");
  const response = userModal.find({name:"Ashok"},function (err, re) {
    if (err) {
      console.log(err);
    } else {
      console.log(re, "=======");
      res.send(re);
    }
  });
  console.log(response, "&&&&&&&&&&&&&&&")
});

module.exports = router;
