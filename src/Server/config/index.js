require('dotenv').config()

module.exports = {
  dbName: process.env.DB_NAME,
  dbPassword: process.env.DB_PASSWORD,
  dbUser: process.env.DB_USER,
  dbHost: process.env.DB_HOST,
  port: process.env.PORT,
  sequelizeConf: {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT
  }
}
