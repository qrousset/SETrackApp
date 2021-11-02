// import express for reouting
const express = require("express");

// import authenticatino controller for operations
const authenticationController = require("../Controllers/authenticationController");

// initalize authentication router
const authenticationRouter = express.Router();

authenticationRouter.use(
  "/login",
  authenticationController.login,
  (req, res) => {
    res.status(200).json(res.locals.loginStatus);
  }
);

authenticationRouter.use(
  "/logout",
  authenticationController.logout,
  (req, res) => {
    res.status(200).json(res.locals.loginStatus);
  }
);

authenticationRouter.use(
  "/signup",
  authenticationController.signup,
  (req, res) => {
    res.status(200).json(res.locals.loginStatus);
  }
);

module.exports = authenticationRouter;
