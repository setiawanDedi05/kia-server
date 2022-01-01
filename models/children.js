'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Children extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Children.init({
    name: DataTypes.STRING,
    nik: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    pob: DataTypes.STRING,
    dob: DataTypes.DATE,
    weight: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    headCirc: DataTypes.INTEGER,
    status: DataTypes.STRING,
    id_parent: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Childrens',
  });
  return Children;
};