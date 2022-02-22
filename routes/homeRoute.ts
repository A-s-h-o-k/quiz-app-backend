const homeRouter = require("express").Router();
const cardStats = require("../model/statisticsSchema");

homeRouter.get("/", (req, res) => {
  cardStats.find({}, (err, ress) => {
    if (err) {
      res.send(err);
    } else {
      res.send(ress);
    }
  });
});

module.exports = homeRouter;
