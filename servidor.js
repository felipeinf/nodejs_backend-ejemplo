const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const puerto = 3001;

app.use(bodyParser.json())
app.listen(puerto);

console.log(`Servidor escuchando en http://localhost:${puerto}`);