const router = require("express").Router();
const statMode = require("../model/statisticsSchema");

router.post("/", async (req: any, res: any) => {
  //   console.log(req.body);
  await statMode.find({}, (err: any, res1: any) => {
    console.log("---------------------------------------------------");
    res.send(res1);
  });
});

module.exports = router;
