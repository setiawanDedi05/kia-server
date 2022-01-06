'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pregnant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  };
  Pregnant.init({
    lastMens: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: DataTypes.STRING,
    id_parent: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pregnants',
  });
  return Pregnant;
};