const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'hostname',
  user: 'username',
  password: 'password',
  database: 'database'
});

module.exports = connection;