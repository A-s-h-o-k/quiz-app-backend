const router = require("express").Router();
const statModels = require("../model/statisticsSchema");

router.post("/", async (req: any, res: any) => {
  console.log(req.body);
  statModels.insertOne({});
});

module.exports = router;
