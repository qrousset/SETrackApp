const db = require("../DB/database");
const bcrypt = require('bcrypt');
const authenticationCntroller = {};

authenticationCntroller.login = (req, res, next) => {
  const {username, password} = req.body;

  // check if user already exists
  await db.query(`SELECT ${username} FROM USERS`)
  .then(data => { 
    // hashed password
    const compare = bcrypt.compareSync(password, data.password);
    
    // if hashed password is not a match, send response stating password is not a match
    if (!data || !compare) {
      res.locals.authenticated = false;
      next();
    } 

    res.locals.authenticated = true;
    next()
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

authenticationCntroller.signup = async (req, res, next) => {
  // pull username and password from request body
  const { username, password, firstName, lastName } = req.body;
  
  // check if user already exists
  const user = await db.query(`SELECT ${username} FROM USERS`)
  
  // if user exists, send response stating user exists
  if (user) { 
    res.locals.userExists = true; 
    next(); 
  } 
  
  // hashed password
  const hashedPassword = bcrypt.hash(password, 10);

  // creat user query
  const query = `INSERT INTO Users(User_ID, User_LastName, FirstName, Hashed_pw) 
  VALUES ${username}, ${lastName}, ${firstName}, ${hashedPassword}`;
  
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
};

module.exports = authenticationCntroller;
