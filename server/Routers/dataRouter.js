const express = require("express");
const dataController = require("../Controllers/dataControllers");
const dataRouter = express.Router();

dataRouter.get("/summary", dataController.getSummary, (req, res) =>
  res.status(200).json(res.locals.summary)
);

// dataRouter.get("/card", dataController.getOneCards, (req, res) =>
//   res.status(200).json(res.locals.card)
// );

dataRouter.post("/card", dataController.addCard, (req, res) =>
  res.status(200).json(res.locals.newCard)
);

dataRouter.put("/card:id", dataController.updateCard, (req, res) =>
  res.status(200).json(res.locals.updatedCard)
);

// dataRouter.get("/graphs", dataController.getGraph, (req, res) =>
//   res.status(200).json(res.locals.graph)
// );

module.exports = dataRouter;
