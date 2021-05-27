'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        id: 1,
        name: 'Skol Lata 250ml',
        price: 2.20,
        url_image: 'http://localhost:3001/images/Skol Lata 350ml.jpg',
      },
      {
        id: 2,
        name: 'Heineken 600ml',
        price: 7.50,
        url_image: 'http://localhost:3001/images/Heineken 600ml.jpg',
      },
    ], { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
