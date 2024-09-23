const mysql = require('mysql2');

const pool = mysql.createPool({
   user:'root',
   host: 'localhost',
   password: 'rakib',
   database: 'node-complete'
})

module.exports = pool.promise();