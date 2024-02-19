const express = require('express');
const app = express(); // Instance from express
const voiture = require('./routes/voiture')

app.use(express.json());

app.use('/voiture', voiture);

app.listen(5000, () => {
    console.log('listening on port 5000');
});
