const db = require("../DB/database");
const bcrypt = require("bcrypt");
const authenticationController = {};

authenticationController.signin = async (req, res, next) => {
  const { username, password } = req.body;
  
  // check if user already exists
  await db.query(`SELECT * FROM users where username = '${username}'`)
  .then((data) => {
    const { hashed_pw } = data.rows[0];
  
    // hashed password
    bcrypt.compare(password, hashed_pw, function(err, result) {
      // console.log(data.password)
      console.log('i hit here too')
      // console.log(result)
      if (result) { 
        res.locals.authenticated = true;
      } else {
        res.locals.authenticated = false;
      }
      next()

    });
  })
  .catch((err) => {
    const defaultErr = {
      log: "Error in authentication controller login",
      status: 400,
      message: { err: "Error in authentication controller login" },
    };
    next(defaultErr);
  });
};

// to completed after sessions or JWT are implemented
// authenticationCntroller.logout = (req, res, next) => {
//   const {} = req.body;
//   const query = "SELECT ";

//   db.query()
//     .then()
//     .catch((err) => {
//       const defaultErr = {
//         log: "Error in authentication controller logout",
//         status: 400,
//         message: { err: "Error in authentication controller logout" },
//       };
//       next(defaultErr);
//     });
// };

authenticationController.signup = async (req, res, next) => {
  console.log("I hit the signup controller");
  // pull username and password from request body
  const { username, password, firstName, lastName } = req.body;
  console.log(password);

  const userString = username.toString();

  const firstQuery = `SELECT * FROM users WHERE username = '${userString}'`;

  // check if user already exists
  const user = await db.query(firstQuery);

  // if user exists, send response stating user exists
  if (user) {
    res.locals.userExists = true;
    next();
  }

  // hashed password
  bcrypt.hash(password, 10, async (err, hash) => {
    // creat user query
    const query = `INSERT INTO users (username, user_last_name, user_first_name, hashed_pw) 
  VALUES ('${username}', '${lastName}', '${firstName}', '${hash}')`;

    // add new user to database
    db.query(query)
      .then(() => {
        res.locals.signedUp = true;
        next();
      })
      .catch((err) => {
        const defaultErr = {
          log: "Error in authentication controller signup",
          status: 400,
          message: { err: "Error in authentication controller signup" },
        };
        next(defaultErr);
      });
  });
};

module.exports = authenticationController;
