require('dotenv').config();

module.exports = {
    development: {
        url: process.env.DEV_DATABASE_URL,
        dialect: 'postgres',
        define: {
            timestamps: false
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    },
    test: {
        url: process.env.TEST_DATABASE_URL,
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    },
    production: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    },
}