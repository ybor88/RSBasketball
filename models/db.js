// models/db.js

const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'rsbasketball',
  password: 'Bgh65I',
  database: 'rsbasketballDB',
  connectionLimit: 10, // Numero massimo di connessioni simultanee al database
  insecureAuth: true, // Opzione aggiunta per gestire eventuali problemi di autenticazione
});

// Funzione per eseguire query nel database
const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        return reject(err);
      }
      connection.query(sql, values, (err, results) => {
        connection.release();
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  });
};

module.exports = {
  query
};