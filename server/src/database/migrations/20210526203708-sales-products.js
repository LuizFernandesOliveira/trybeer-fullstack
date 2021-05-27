'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SalesProducts', {
      saleId: {
        type: Sequelize.INTEGER,
        field: 'sale_id',
        references: {
          model: 'Sales',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      productId: {
        type: Sequelize.INTEGER,
        field: 'product_id',
        references: {
          model: 'Products',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SalesProducts');
  }
};
