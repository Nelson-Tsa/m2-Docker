const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Affirmation = sequelize.define('Affirmation', {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  language: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = Affirmation
