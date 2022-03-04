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
        type: Sequelize.STRING,
        isUrl: true,
        allowNull: false,
        notEmpty: true,
      },
      banner: {
        type: Sequelize.STRING,
        isUrl: true,
        allowNull: false,
        notEmpty: true,
      },
      background: {
        type: Sequelize.STRING,
        isUrl: true,
        allowNull: false,
        notEmpty: true,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        notEmpty: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        notEmpty: true,
      },
      rank: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      isOriginal: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      isSeries: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      buyLink: {
        type: Sequelize.STRING,
        isUrl: true,
        allowNull: false,
      },
      moreInfoLink: {
        type: Sequelize.STRING,
        isUrl: true,
        allowNull: false,
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