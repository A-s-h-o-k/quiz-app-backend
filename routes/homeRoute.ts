const homeRouter = require("express").Router();
const cardStats = require("../model/statisticsSchema");

homeRouter.get("/", (req, res) => {
  console.log("in home route")
  cardStats.find({}, (err, ress) => {
    if (err) {
      console.log("in rreguest")
      res.send(err);
    } else {
      res.send(ress);
    }
  });
});

module.exports = homeRouter;
