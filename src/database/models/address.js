'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Address.belongsTo(models.User,{
        as: 'user',
        foreignKey: 'userId',
        onDelete: 'cascade'
      })
    }
  }
  Address.init({
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    province: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Address',
    paranoid: true
  });
  return Address;
};