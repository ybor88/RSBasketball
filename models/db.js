// models/db.js

const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'rsbasketball',
  password: 'Bgh65I',
  database: 'rsbasketballDB'
});

// Funzione per eseguire query nel database
const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        return reject(`Errore nella connessione al database: ${err.message}`);
      }

      connection.query(sql, values, (err, results) => {
        connection.release();

        if (err) {
          return reject(`Errore nell'esecuzione della query: ${err.message}`);
        }

        resolve(results);
      });
    });
  });
};

module.exports = {
  query
};