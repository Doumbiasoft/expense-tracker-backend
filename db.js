"use strict";
/** Database setup for expense tracker. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

let db;

db = new Client({
  connectionString: getDatabaseUri(),
  ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : false
});

db.connect();

module.exports = db;