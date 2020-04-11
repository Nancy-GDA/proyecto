const Sequelize = require('sequelize')
const { dbName, dbPassword, dbUser, sequelizeConf } = require('../config')

let db

try {
  db = new Sequelize(dbName, dbUser, dbPassword, sequelizeConf)
  db.authenticate()
  console.log('Database connect successful')
} catch (error) {
  console.log(error)
}

module.exports = db
