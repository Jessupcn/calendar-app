const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('event', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },

  description: {
    type: Sequelize.TEXT,
  },

  startTime: {
    type: Sequelize.DATE
  },

  endTime: {
    type: Sequelize.DATE
  },

})

module.exports = Event
