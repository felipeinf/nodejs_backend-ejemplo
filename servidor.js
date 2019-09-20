const express = require('express');
const bodyParser = require('body-parser');
const rutear = require('./utilidades/rutas');
const mongo = require('./utilidades/bd');
const uri = require('./uri');

const app = express();
const puerto = 3001;

mongo.uriConexion(uri);

app.use(bodyParser.json());
rutear(app);
app.listen(puerto);

console.log(`Servidor escuchando en http://localhost:${puerto}`);