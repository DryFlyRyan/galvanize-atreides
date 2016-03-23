require('dotenv').load();
var environment = 'production';
var config = require('../knexfile')[environment];
var knex = require('knex')(config);
module.exports = knex;
