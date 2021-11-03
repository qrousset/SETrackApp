const { te } = require("date-fns/locale");
const db = require("../DB/database.js");

dataController = {};

dataController.getAllCards = async (req, res, next) => {
  const appQueryString = "SELECT a.*, s.status_name FROM applications a LEFT OUTER JOIN status s ON s.status_id = a.app_status";
// "SELECT a.*, c.company_name, s.status_name FROM applications a LEFT OUTER JOIN companies c ON a.company_id = c.company_id LEFT OUTER JOIN status s ON s.status_id = a.app_status";
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
  const appQueryString = "SELECT a.*, s.status_name FROM applications a LEFT OUTER JOIN status s ON s.status_id = a.app_status";

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
  const query = `INSERT INTO applications (position_name, company_name, app_status, next_status, job_listing, location, app_notes, app_sent, sifted, phone_screen, interview1, interview2, on_site, offer, offer_amount, offer_amount2, accepted, declined, rejected, archived) VALUES ('${application.position_name}', '${application.company_name}', '${application.app_status}', '${application.next_status}', '${application.job_listing}', '${application.location}', '${application.app_notes}', '${application.app_sent}', '${application.sifted}', '${application.phone_screen}', '${application.interview1}', '${application.interview2}', '${application.on_site}', '${application.offer}', '${application.offer_amount}', '${application.offer_amount2}', '${application.accepted}', '${application.declined}', '${application.rejected}', '${application.archived}') RETURNING app_id`;
  db.query(query)
    .then((data) => {
      res.locals.newCard = data.rows;
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
  console.log("in updateCard")
  const application = req.body;
  const { id } = req.params;
  const query = `UPDATE applications SET position_name='${application.position_name}', company_name='${application.company_name}', app_status='${application.app_status}', next_status='${application.next_status}', job_listing='${application.job_listing}', location='${application.location}', app_notes='${application.app_notes}', app_sent='${application.app_sent}', sifted='${application.sifted}', phone_screen='${application.phone_screen}', interview1='${application.interview1}', interview2='${application.interview2}', on_site='${application.on_site}', offer='${application.offer}', offer_amount='${application.offer_amount}', offer_amount2='${application.offer_amount2}', accepted='${application.accepted}', declined='${application.declined}', rejected='${application.rejected}', archived='${application.archived}' WHERE app_id = '${id}'`;

  db.query(query)
    .then((data) => {
      res.locals.updatedCard = data;
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

dataController.getGraph = async (req, res, next) => {
  data = res.locals.data;
  sankeyArr = [];

  // if (data.app_sent !== "") sent++;
  // if (data.sifted !== "") sifted++;
  // if (data.phone_screen !== "") phone_screen++;
  // if (data.interview1 !== "") interview1++;
  // if (data.interview2 !== "") interview2++;
  // if (data.on_site !== "") on_site++;
  // if (data.offer !== "") offer++;
  // if (data.accepted !== "") accepted++;
  // if (data.declined !== "") declined++;
  // if (data.rejected !== "") rejected++;
  // if (data.archived !== "") archived++;

  const status = [
    "sent",
    "sifted",
    "phone_screen",
    "interview1",
    "interview2",
    "on_site",
    "offer",
    "accepted",
    "declined",
  ];

  for (let i = 0; i < status.length - 1; i++) {
    if (data[status[i]] !== "" && data[status[i + 1]] !== "")
      total[`${status[i]}-${status[i + 1]}`] += 1;
  }

  for (const key in total) {
    const tempDataPoint = [];
    tempDataPoint.push(key.match(/.*(?=-)/));
    tempDataPoint.push(key.match(/([a-z]*)$/));
    tempDataPoint.push(total[key]);
    sankeyArr.push(tempDataPoint);
  }

  //sent-sifted = 10
  //sifted-phone_screen = 8
  //phone_screen-interview1 = 6
  //interview1-interview2 = 4
  //interview2-onSite = 2
  //onSite-offer = 2

  res.locals.sankey = sankeyArr;
  next();
};

module.exports = dataController;
