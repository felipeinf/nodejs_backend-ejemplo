const express = require('express');
const bodyParser = require('body-parser');
const rutear = require('./rutas');
const mongo = require('./bd');
const uri = require('./uri');

const app = express();
const puerto = 3001;

mongo.uriConexion(uri);

app.use(bodyParser.json());
rutear(app);
app.listen(puerto);

console.log(`Servidor escuchando en http://localhost:${puerto}`);