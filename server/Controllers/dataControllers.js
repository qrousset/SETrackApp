const db = require("../DB/database.js");

dataController = {};

dataController.getAllCards = async (req, res, next) => {
  const queryString =
    "SELECT a.*, c.company_name, s.status_name FROM applications a LEFT OUTER JOIN companies c ON a.company_id = c.company_id LEFT OUTER JOIN status s ON s.status_id = a.app_status";

  db.query(queryString)
    .then(async (data) => {
      res.locals.cards = data.rows;
      next();
    })
    .catch((err) => {
      next({
        log: err,
        status: 500,
        message: { err: "Error in the getAllCards middleware" },
      });
    });
};

dataController.getOneCards = async (req, res, next) => {};

dataController.addCard = async (req, res, next) => {};

dataController.updateCard = async (req, res, next) => {};

dataController.getGraph = async (req, res, next) => {};

module.exports = dataController;
