db = require("../DB/database");
const authenticationCntroller = {};

authenticationCntroller.login = (req, res, next) => {
  const {} = req.body;
  const query = "SELECT ";

  db.query()
    .then()
    .catch((err) => {
      const defaultErr = {
        log: "Error in authentication controller login",
        status: 400,
        message: { err: "Error in authentication controller login" },
      };
      next(defaultErr);
    });
};

authenticationCntroller.logout = (req, res, next) => {
  const {} = req.body;
  const query = "SELECT ";

  db.query()
    .then()
    .catch((err) => {
      const defaultErr = {
        log: "Error in authentication controller logout",
        status: 400,
        message: { err: "Error in authentication controller logout" },
      };
      next(defaultErr);
    });
};

authenticationCntroller.signup = (req, res, next) => {
  const {} = req.body;
  const query = "SELECT ";

  db.query()
    .then()
    .catch((err) => {
      const defaultErr = {
        log: "Error in authentication controller signup",
        status: 400,
        message: { err: "Error in authentication controller signup" },
      };
      next(defaultErr);
    });
};

module.exports = authenticationCntroller;
