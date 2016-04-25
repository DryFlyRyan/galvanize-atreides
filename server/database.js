// Database & Bookshelf Defs
var knex = require('./db/knex');
var pg = require('pg');
var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

module.exports = bookshelf;
