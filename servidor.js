const express = require('express');
const bodyParser = require('body-parser');
const crearRutas = require('./rutas');

const app = express();
const puerto = 3001;

app.use(bodyParser.json());
crearRutas(app);
app.listen(puerto);

console.log(`Servidor escuchando en http://localhost:${puerto}`);