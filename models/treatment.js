'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class treatment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  };
  treatment.init({
    name:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    month: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Treatments',
  });
  return treatment;
};