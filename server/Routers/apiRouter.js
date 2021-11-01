const express = require("express");
const controller = require("../Controllers/controllers");
const apiRouter = express.Router();

// apiRouter.post("/Signin", controller.signin, (req, res) => {
//   res.status(200).json(res.locals.cvObj);
// });

module.exports = apiRouter;
