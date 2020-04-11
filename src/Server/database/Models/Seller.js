const { DataTypes } = require('sequelize')

const db = require('./../sequilize')

const Seller = db.define('vendedor', {
  id_vendedor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  apellidos: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  usuario: {
    type: DataTypes.STRING(25),
    allowNull: false,
    unique: true
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ubicacion: DataTypes.STRING
}, {
  timestamps: false,
  freezeTableName: true
})

module.exports = Seller
