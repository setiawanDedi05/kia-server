'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = require('./tips.json')
    data.forEach((result) => {
      result.createdAt = new Date()
      result.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Tips', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tips', null, {});
  }
};
