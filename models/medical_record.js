'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medical_record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  medical_record.init({
    id: DataTypes.INTEGER,
    id_children: DataTypes.INTEGER,
    id_treatment: DataTypes.INTEGER,
    id_midwife: DataTypes.INTEGER,
    place: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    note: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'medical_record',
  });
  return medical_record;
};