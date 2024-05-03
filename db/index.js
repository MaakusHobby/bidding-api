const { initKnex } = require('./knex')

class KnexModel {
    constructor(config){
        const knexConfig = parseConfig(config);
        const knex = initKnex(knexConfig);

        console.log("Knex constructor called");

        this.knex = knex;
    }

    close() {
        return this.knex.destroy();
      }
    
    ping() {
        return this.knex.raw('SELECT 1+1 AS result;');
    }
}

function parseConfig(config){
    const knexConfig = {
        client : config.client,
        connection : {
            connectionString: config.DATABASE_URL,
            host: config.host,
            port: config.port,
            user: config.user,
            database: config.database,
            password: config.password,
        }
    };

    return knexConfig; 
}

module.exports = KnexModel; 
