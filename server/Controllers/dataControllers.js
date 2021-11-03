const db = require("../DB/database.js");

dataController = {};

dataController.getAllCards = async (req, res, next) => {
  const appQueryString =
    "SELECT a.*, c.company_name, s.status_name FROM applications a LEFT OUTER JOIN companies c ON a.company_id = c.company_id LEFT OUTER JOIN status s ON s.status_id = a.app_status";

  db.query(appQueryString)
    .then(async (data) => {
      res.locals.cards = data.rows;
    })
    .catch((err) => {
      next({
        log: err,
        status: 500,
        message: { err: "Error in the getAllCards middleware" },
      });
    });
};

dataController.getSummary = async (req, res, next) => {
  const appQueryString =
    "SELECT a.*, c.company_name, s.status_name FROM applications a LEFT OUTER JOIN companies c ON a.company_id = c.company_id LEFT OUTER JOIN status s ON s.status_id = a.app_status";

  db.query(appQueryString)
    .then(async (data) => {
      res.locals.cards = data.rows;

      const cardArr = [];

      for (let index = 0; index < data.rows.length; index++) {
        const curCard = data.rows[index];

        const curObj = {
          application_id: curCard.app_id,
          company_id: curCard.company_id,
          company_name: curCard.company_name,
          user_id: curCard.user_id,
          job_listing: curCard.job_listing,
          submission_date: curCard.app_sent,
          status_name: curCard.status_name,
          next_status: curCard.next_status,
          date: curCard.next_status_date,
        };
        cardArr.push(curObj);
      }
      res.locals.summary = cardArr;
      next();
    })
    .catch((err) => {
      next({
        log: err,
        status: 500,
        message: { err: "Error in the getSummary middleware" },
      });
    });
};

dataController.getOneCard = async (req, res, next) => {
  const { app_id } = req.body;
  const query = `SELECT * FROM applications WHERE app_id = '${app_id}'`;

  db.query(query)
    .then((data) => {
      res.locals.card = data;
      next();
    })
    .catch((err) => {
      next({
        log: err,
        status: 500,
        message: { err: "Error in the getOneCard middleware" },
      });
    });
};

dataController.addCard = async (req, res, next) => {
  const application = req.body;
  const query = `INSERT INTO applications (app_id, position_name, company_id, app_status, next_status, job_listing, location, notes, sent, sifted, phone_screen, interview1, interview2, on_site, offer, offer_amount, offer_amount2, accepted, declined, rejected, archived) VALUES ('${application.app_id}', '${application.position_name}', '${application.company_id}', '${application.app_status}', '${application.next_status}', '${application.job_listing}', '${application.location}', '${application.notes}', '${application.sent}', '${application.sifted}', '${application.phone_screen}', '${application.interview1}', '${application.interview2}', '${application.on_site}', '${application.offer}', '${application.offer_amount}', '${application.offer_amount2}', '${application.accepted}', '${application.accepted}', '${application.declined}', '${application.rejected}', '${application.archived}') RETURNING app_id`;
  db.query(query)
    .then((data) => {
      res.locals.newCard = data;
      next();
    })
    .catch((err) => {
      next({
        log: err,
        status: 500,
        message: { err: "Error in the addCard middleware" },
      });
    });
};

dataController.updateCard = async (req, res, next) => {
  const application = req.body;
  const query = `UPDATE applications SET (position_name = '${application.position_name}', company_id = '${application.company_id}', app_status = '${application.app_status}', next_status = '${application.next_status}', job_listing = '${application.job_listing}', location = '${application.location}', notes = '${application.notes}', sent = '${application.sent}', sifted = '${application.sifted}', phone_screen = '${application.phone_screen}', interview1 = '${application.interview1}', interview2 = '${application.interview2}', on_site = '${application.on_site}', offer = '${application.offer}', offer_amount = '${application.offer_amount}', offer_amount2 ='${application.offer_amount2}', accepted = '${application.accepted}', declined = '${application.declined}', rejected = '${application.rejected}', archived = '${application.archived}') WHERE app_id = '${application.app_id}`;

  db.query(query)
    .then((data) => {
      res.locals.updateCard = data;
      next();
    })
    .catch((err) => {
      next({
        log: err,
        status: 500,
        message: { err: "Error in the updateCard middleware" },
      });
    });
};

dataController.getGraph = async (req, res, next) => {};

module.exports = dataController;
