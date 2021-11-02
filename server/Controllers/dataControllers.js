const db = require("../DB/database.js");

dataController = {};

dataController.getAllCards = async (req, res, next) => {
  const appQueryString =
    "SELECT a.*, c.company_name, s.status_name FROM applications a LEFT OUTER JOIN companies c ON a.company_id = c.company_id LEFT OUTER JOIN status s ON s.status_id = a.app_status ";
// s.status_name next_status  
// , CASE WHEN next_status > 7 THEN NULL ELSE next_status END next_status
// LEFT OUTER JOIN status s ON s.status_id = a.next_status
  db.query(appQueryString)
    .then(async (data) => {
      res.locals.cards = data.rows;

      const cardArr = [];

      for(let index = 0; index < data.rows.length; index++) {

        const curObj = {
          application_id: data.rows[index].app_id,
          company_id: data.rows[index].company_id,
          company_name: data.rows[index].company_name,
          user_id: data.rows[index].user_id,
          job_listing: data.rows[index].job_listing,
          submission_date: data.rows[index].sent,
          status_name: data.rows[index].status_name,
          next_status: data.rows[index].next_status,
          date: '',
        };

        cardArr.push(curObj);
      }


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

dataController.getOneCard = async (req, res, next) => {};

dataController.addCard = async (req, res, next) => {};

dataController.updateCard = async (req, res, next) => {};

dataController.getGraph = async (req, res, next) => {};

module.exports = dataController;
