const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Census = sequelize.define('Census', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  vaccinated: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  tableName: 'census',
  timestamps: false,
});

module.exports = Census;
