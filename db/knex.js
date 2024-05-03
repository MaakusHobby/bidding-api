const Knex = require('knex');

module.exports = {
    initKnex : (knexConfig) => Knex(knexConfig)
}