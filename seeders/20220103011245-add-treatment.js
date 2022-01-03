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
        "description": "Vaksin HB 0 diberikan kepada bayi yang baru lahir, sebab dikhawatirkan bayi yang baru lahir tertular penyakit hepatitis B yang berasal dari ibunya pada saat proses persalinan. Penyakit hepatitis B sangat berbahaya, sebab penyakit ini dapat menyerang organ hati. sehingga ketika bayi mendapatkan Vaksin HB 0 maka besar kemungkinan bayi tidak akan tertular penyakit hepatitis B",
        "month": 0,
        "createdAt": "2021-12-23 21:26:29.504+07",
        "updatedAt": "2021-12-23 21:26:29.504+07"
      },
      {
        "name": "BCG dan Polio 1",
        "description": "Imunisasi polio diberikan untuk mencegah penyakit polio. - Vaksin BCG diberikan untuk melindungi tubuh dari penyakit tuberkulosis (TB)",
        "month": 1,
        "createdAt": "2021-12-23 21:28:21.438+07",
        "updatedAt": "2021-12-23 21:28:21.438+07"
      },
      {
        "name": "DPT-HB-Hib 1 dan Polio 2",
        "description": "Vaksin DPT merupakan vaksin gabungan untuk mencegah penyakit difteri, batuk rejan (pertusis), dan tetanus.-Vaksin Hib bertujuan untuk mencegah infeksi bakteri Haemophilus influenza tipe B. Infeksi bakteri ini dapat memicu penyakit, seperti radang selaput otak (meningitis), radang paru-paru (pneumonia), radang sendi (septic arthritis), dan radang pada lapisan pelindung jantung (perikarditis).-Imunisasi polio diberikan untuk mencegah penyakit polio",
        "month": 2,
        "createdAt": "2021-12-23 21:28:59.591+07",
        "updatedAt": "2021-12-23 21:28:59.591+07"
      },
      {
        "name": "DPT-HB-Hib 2 dan Polio 3",
        "description": "Vaksin DPT merupakan vaksin gabungan untuk mencegah penyakit difteri, batuk rejan (pertusis), dan tetanus.-Vaksin Hib bertujuan untuk mencegah infeksi bakteri Haemophilus influenza tipe B. Infeksi bakteri ini dapat memicu penyakit, seperti radang selaput otak (meningitis), radang paru-paru (pneumonia), radang sendi (septic arthritis), dan radang pada lapisan pelindung jantung (perikarditis).-Imunisasi polio diberikan untuk mencegah penyakit polio",
        "month": 3,
        "createdAt": "2021-12-23 21:30:42.942+07",
        "updatedAt": "2021-12-23 21:30:42.942+07"
      },
      {
        "name": "DPT-HB-Hib 3, Polio 4 dan IPV atau Polio suntik",
        "description": "Vaksin DPT merupakan vaksin gabungan untuk mencegah penyakit difteri, batuk rejan (pertusis), dan tetanus.-Vaksin Hib bertujuan untuk mencegah infeksi bakteri Haemophilus influenza tipe B. Infeksi bakteri ini dapat memicu penyakit, seperti radang selaput otak (meningitis), radang paru-paru (pneumonia), radang sendi (septic arthritis), dan radang pada lapisan pelindung jantung (perikarditis).-Imunisasi polio diberikan untuk mencegah penyakit polio.",
        "month": 4,
        "createdAt": "2021-12-23 21:31:52.486+07",
        "updatedAt": "2021-12-23 21:31:52.486+07"
      },
      {
        "name": "Campak atau MR",
        "description": "Imunisasi campak aman dan efektif untuk mencegah campak. - Vaksin MMR merupakan vaksin kombinasi untuk melindungi anak dari campak, gondongan, dan rubella. Ketiga kondisi ini dapat menyebabkan komplikasi berbahaya, seperti meningitis, pembengkakan otot, atau hilang pendengaran (tuli).",
        "month": 9,
        "createdAt": "2021-12-23 21:32:41.584+07",
        "updatedAt": "2021-12-23 21:32:41.584+07"
      },
      {
        "name": "DPT-HB-Hib dan Campak/MR",
        "description": "Vaksin DPT merupakan vaksin gabungan untuk mencegah penyakit difteri, batuk rejan (pertusis), dan tetanus.-Vaksin Hib bertujuan untuk mencegah infeksi bakteri Haemophilus influenza tipe B. Infeksi bakteri ini dapat memicu penyakit, seperti radang selaput otak (meningitis), radang paru-paru (pneumonia), radang sendi (septic arthritis), dan radang pada lapisan pelindung jantung (perikarditis).-Imunisasi polio diberikan untuk mencegah penyakit polio. - Imunisasi campak aman dan efektif untuk mencegah campak. - Vaksin MMR merupakan vaksin kombinasi untuk melindungi anak dari campak, gondongan, dan rubella. Ketiga kondisi ini dapat menyebabkan komplikasi berbahaya, seperti meningitis, pembengkakan otot, atau hilang pendengaran (tuli).",
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
    await queryInterface.bulkDelete('Treatments', null, {})
  }
};
