'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MedicalRecord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MedicalRecord.init({
    id_children: DataTypes.INTEGER,
    id_treatment: DataTypes.INTEGER,
    id_midwife: DataTypes.INTEGER,
    place: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    note: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'MedicalRecord',
  });
  return MedicalRecord;
};