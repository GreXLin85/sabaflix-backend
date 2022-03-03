'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ContentCategory.hasMany(models.Content, {
        foreignKey: 'contentCategoryId',
        onDelete: 'CASCADE',
      });
    }
  };
  ContentCategory.init({
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ContentCategory',
  });
  return ContentCategory;
};