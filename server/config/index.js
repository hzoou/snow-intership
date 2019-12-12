require('dotenv').config();

module.exports = {
    corsConfig: {
        origin: (origin, callback) => callback(null, true),
        exposedHeaders: ['Set-Cookie'],
        credentials: true
    },
    databaseConfig: {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "dialect": 'mysql',
    },
};