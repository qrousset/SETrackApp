db = require("./database");
const controller = {};

controller.createCompany = (req, res, next) => {
  try {
    res.locals.cvObj = {};
    if (res.locals.login) {
      res.locals.cvObj.cv = res.locals.cv;
      res.locals.cvObj.skills_table = res.locals.skills;
    }
    next();
  } catch {
    next({
      log: "Error in Auth Login",
      status: 400,
      message: { err: "Error in Auth Login" },
    });
  }
};

module.exports = controller;
