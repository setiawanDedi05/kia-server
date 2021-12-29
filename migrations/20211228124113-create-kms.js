'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Kms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bulan: {
        type: Sequelize.INTEGER
      },
      minus3: {
        type: Sequelize.FLOAT
      },
      minus2: {
        type: Sequelize.FLOAT
      },
      minus1: {
        type: Sequelize.FLOAT
      },
      median: {
        type: Sequelize.FLOAT
      },
      plus1: {
        type: Sequelize.FLOAT
      },
      plus2: {
        type: Sequelize.FLOAT
      },
      plus3: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Kms');
  }
};