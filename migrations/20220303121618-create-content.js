'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Contents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      titleLogo: {
        type: Sequelize.STRING
      },
      background: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      categoryId: {
        type: Sequelize.INTEGER
      },
      rank: {
        type: Sequelize.INTEGER
      },
      isOriginal: {
        type: Sequelize.BOOLEAN
      },
      isSeries: {
        type: Sequelize.BOOLEAN
      },
      buyLink: {
        type: Sequelize.STRING
      },
      moreInfoLink: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Contents');
  }
};