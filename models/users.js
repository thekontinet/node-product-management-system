'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    checkPassword(password){
        return bcrypt.compareSync(password, this.password)
    }
  }
  Users.init({
    username: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      set(password){
        this.setDataValue('password', bcrypt.hashSync(password, bcrypt.genSaltSync(10)))
      }
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};