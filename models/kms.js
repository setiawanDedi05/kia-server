'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Kms.init({
    bulan: DataTypes.INTEGER,
    minus3: DataTypes.FLOAT,
    minus2: DataTypes.FLOAT,
    minus1: DataTypes.FLOAT,
    median: DataTypes.FLOAT,
    plus1: DataTypes.FLOAT,
    plus2: DataTypes.FLOAT,
    plus3: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Kms',
  });
  return Kms;
};