'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Content.belongsTo(models.ContentCategory, {
        foreignKey: 'categoryId',
        onDelete: 'CASCADE',
        as: 'contentCategory'
      });
    }
  };
  Content.init({
    title: DataTypes.STRING,
    titleLogo: DataTypes.STRING,
    banner: DataTypes.STRING,
    background: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    rank: DataTypes.INTEGER,
    isOriginal: DataTypes.BOOLEAN,
    isSeries: DataTypes.BOOLEAN,
    buyLink: DataTypes.STRING,
    moreInfoLink: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Content',
  });
  return Content;
};