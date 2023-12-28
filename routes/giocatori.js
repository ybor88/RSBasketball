// routes/giocatori.js

const express = require('express');
const router = express.Router();
const pool = require('../models/db');

// Endpoint per ottenere tutti i giocatori
router.get('/giocatori', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM giocatori');
    const data = Array.isArray(result) ? result : result.rows;

    // Rispondi con l'array di giocatori in formato JSON
    res.json(data);
  } catch (error) {
    console.error('Errore nella query:', error.message);
    res.status(500).json({ error: 'Errore del server' });
  }
});

module.exports = router;