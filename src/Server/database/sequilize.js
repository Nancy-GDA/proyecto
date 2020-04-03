const Sequelize = require('sequelize')
const { dbName, dbPassword, dbUser, sequelizeConf } = require('../config')

const db = new Sequelize(dbName, dbUser, dbPassword, sequelizeConf)

module.exports = db
