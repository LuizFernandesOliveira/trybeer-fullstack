'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [
        {
          id: 1,
          name: 'Trybeer Admin',
          email: 'tryber@trybe.com.br',
          password: '123456',
          role: 'administrator',
        },
        {
          id: 2,
          name: 'testuser',
          email: 'user@test.com',
          password: 'test123',
          role: 'client',
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
