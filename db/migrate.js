const config = require('../config');
const KnexModel = require('./index');

const db = new KnexModel(config.db);
const knex = db.knex;

function latest() {
  return knex.migrate.latest({
    directory: `${__dirname}/migrations`
  });
}

function down() {
  return knex.migrate.down({
    directory: `${__dirname}/migrations`
  });
}

module.exports = {
  latest,
  down
};
