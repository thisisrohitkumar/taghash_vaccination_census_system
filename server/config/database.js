require('dotenv').config();
const { Sequelize } = require('sequelize');
// Load sensitive data from environment variables or a configuration file
const host = process.env.DB_HOST;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

const sequelize = new Sequelize({
  dialect: 'mysql',
  host,
  username,
  password,
  database,
});

module.exports = sequelize;
