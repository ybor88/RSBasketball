// index.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { query } = require('./models/db');

app.use(express.json());

// Middleware per gestire i file statici dalla directory 'public'
app.use(express.static('public'));

// Connessione alle route
app.use('/api', require('./routes/giocatori'));

// Homepage
app.get('/', async (req, res) => {
  try {
    // Esegui una query per ottenere i dati dei giocatori ordinati per potenza
    const players = await query('SELECT * FROM giocatori ORDER BY potenza DESC');
    
    // Risponde con la pagina HTML e i dati dei giocatori
    res.sendFile(__dirname + '/public/index.html');
    res.json(players);
  } catch (error) {
    console.error('Errore nella query:', error);
    res.status(500).send('Errore del server');
  }
});

// Avvio del server
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});