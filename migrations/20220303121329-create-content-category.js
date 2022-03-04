'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ContentCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        notEmpty: true,
      },
      slug: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        notEmpty: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true,
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
    await queryInterface.dropTable('ContentCategories');
  }
};