'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Childrens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      nik: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      gender: {
        type: Sequelize.STRING,
        allowNull:true
      },
      pob: {
        type: Sequelize.STRING,
        allowNull: true
      },
      dob: {
        type: Sequelize.DATE,
        allowNull: true
      },
      weight: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      height: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      headCirc: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true
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
    await queryInterface.dropTable('Childrens');
  }
};