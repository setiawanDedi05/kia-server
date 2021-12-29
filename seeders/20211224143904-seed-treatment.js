'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Treatments', [
      {
        "name": "HB-0",
        "month": 0,
        "createdAt": "2021-12-23 21:26:29.504+07",
        "updatedAt": "2021-12-23 21:26:29.504+07"
      },
      {
        "name": "BCG dan Polio 1",
        "month": 1,
        "createdAt": "2021-12-23 21:28:21.438+07",
        "updatedAt": "2021-12-23 21:28:21.438+07"
      },
      {
        "name": "DPT-HB-Hib 1 dan Polio 2",
        "month": 2,
        "createdAt": "2021-12-23 21:28:59.591+07",
        "updatedAt": "2021-12-23 21:28:59.591+07"
      },
      {
        "name": "DPT-HB-Hib 2 dan Polio 3",
        "month": 3,
        "createdAt": "2021-12-23 21:30:42.942+07",
        "updatedAt": "2021-12-23 21:30:42.942+07"
      },
      {
        "name": "DPT-HB-Hib 3, Polio 4 dan IPV atau Polio suntik",
        "month": 4,
        "createdAt": "2021-12-23 21:31:52.486+07",
        "updatedAt": "2021-12-23 21:31:52.486+07"
      },
      {
        "name": "Campak atau MR",
        "month": 9,
        "createdAt": "2021-12-23 21:32:41.584+07",
        "updatedAt": "2021-12-23 21:32:41.584+07"
      },
      {
        "name": "DPT-HB-Hib dan Campak/MR",
        "month": 18,
        "createdAt": "2021-12-23 21:32:41.584+07",
        "updatedAt": "2021-12-23 21:32:41.584+07"
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Treatments', {})
  }
};
