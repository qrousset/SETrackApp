const express = require("express");
const dataController = require("../Controllers/dataControllers");
const dataRouter = express.Router();

dataRouter.get("/cards", dataController.getAllCards, (req, res) =>
  res.status(200).json(res.locals.cards)
);

dataRouter.get("/card", dataController.getOneCard, (req, res) =>
  res.status(200).json(res.locals.card)
);

dataRouter.post("/card", dataController.addCard, (req, res) =>
  res.status(200).json()
);

dataRouter.put("/card:id", dataController.updateCard, (req, res) =>
  res.status(200).json()
);

dataRouter.get("/graphs", dataController.getGraph, (req, res) =>
  res.status(200).json(res.locals.graph)
);

module.exports = dataRouter;
