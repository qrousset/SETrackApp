const path = require("path");
const express = require("express");
const app = express();
const dataRouter = require("./Routers/dataRouter");
const authenticationRouter = require("./Routers/authenticationRouter");

const PORT = 3000;

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handle requests for static files
if (process.env.NODE_ENV === "production") {
  app.use("/dist", express.static(path.join(__dirname, "../dist")));
  app.get("/", (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, "../dist/index.html"));
  });
}
console.log(process.env.NODE_ENV);

// handle requests for static files
app.use(express.static(path.resolve(__dirname, "../src")));

// handles user authentication = eg login, logout, signup
app.use("/authenticate", authenticationRouter);

// redirect to internal api to for data
app.use("/data", dataRouter);

// catch-all route handler for any requests to an unknown route
// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "..src/index.html"), function (err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

// @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Ready to apply on port: ${PORT}...`);
});

module.exports = app;
