const { Pool } = require("pg");
const PG_URI =
  "postgres://ruoikmfq:TO5Vs0zTlHmULXxCciotpXDwUJVF_sRt@fanny.db.elephantsql.com/ruoikmfq";

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: async (text, params, callback) => {
    console.log("executed query", text);
    return await pool.query(text, params, callback);
  },
};
