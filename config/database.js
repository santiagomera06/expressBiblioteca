const mysql = require('mysql2');


const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'1234',	
    database:"expressBiblioteca",
    
})
module.exports = pool.promise();