
module.exports = {
    db: {
        adapter: process.env.DB_ADAPTER,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        connectionString: process.env.DB_CONNECTION_STRING,
    }
}