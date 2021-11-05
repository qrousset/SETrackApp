// import express for reouting
const express = require("express");

// import authenticatino controller for operations
const authenticationController = require("../Controllers/authenticationControllers");

// initalize authentication router
const authenticationRouter = express.Router();

authenticationRouter.post(
  "/signin",
  authenticationController.signin,
  (req, res) => {
    if (!res.locals.authenticated) {
      res.status(200).send("invalid username or password");
    } else {
      res.status(200).json(res.locals.authenticated);
    }
  }
);

// authenticationRouter.get(
//   "/logout",
//   authenticationController.logout,
//   (req, res) => {
//     res.status(200).json(res.locals.loginStatus);
//   }
// );

// is signedUp necessary? Can it be assumed if user doesn't exists that user creation is successful
authenticationRouter.post(
  "/signup",
  authenticationController.signup,
  (req, res) => {
    console.log("I hit the router");
    // if user exists, short-circuit functino and notify user
    if (res.locals.userExists) {
      res.status(200).send("user already exists");
    }
    // redirect user to homepage
    else if (res.locals.signedUp) {
      res.redirect("/");
    }
    // user has been created
    else {
      res.status(200).json(res.locals.loginStatus);
    }
  }
);

module.exports = authenticationRouter;
