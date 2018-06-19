const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('event', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmpty: false,
    }
  },

  description: {
    type: Sequelize.TEXT,
  },

  startTime: {

  },

  endTime: {
    
  },

})

module.exports = Event
