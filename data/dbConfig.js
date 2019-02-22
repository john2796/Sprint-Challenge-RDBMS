const knex = require("knex");
const paginator = require("knex-paginator");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);
paginator(db);
module.exports = db;
