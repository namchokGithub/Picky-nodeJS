const mysql = require('mysql');

//local mysql db connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'picky'
});

connection.connect(err => {
    if (err) throw err
    console.log('connected picky success');
});

module.exports = connection;