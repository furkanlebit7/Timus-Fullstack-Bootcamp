
const { Pool } = require("pg");
require("dotenv").config();

exports.pool = new Pool({
    connectionString:
      `postgres://${process.env.DB_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`,
  });