const { te } = require("date-fns/locale");
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

      for (let index = 0; index < data.rows.length; index++) {
        const curObj = {
          application_id: data.rows[index].app_id,
          company_id: data.rows[index].company_id,
          company_name: data.rows[index].company_name,
          user_id: data.rows[index].user_id,
          job_listing: data.rows[index].job_listing,
          submission_date: data.rows[index].sent,
          status_name: data.rows[index].status_name,
          next_status: data.rows[index].next_status,
          date: "",
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
