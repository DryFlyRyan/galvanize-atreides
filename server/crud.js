require('dotenv').load();
var knex = require('./db/knex');
var pg = require('pg');
var config = {
  client: 'pg',
  connection: process.env.DATABASE_URL || 'postgres://localhost/atreides',
  ssl: true
}
