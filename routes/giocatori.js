// routes/giocatori.js

const express = require('express');
const router = express.Router();
const pool = require('../models/db');

// Endpoint per ottenere tutti i giocatori
router.get('/giocatori', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM giocatori');
    res.json(result.rows);
  } catch (error) {
    console.error('Errore nella query:', error);
    res.status(500).send('Errore del server');
  }
});

module.exports = router;