const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nombreSchema = "usuario";

const modelo = new Schema({
    nombre: String,
    creado: Date,
    modificado: Date
});

module.exports = mongoose.model(nombreSchema, modelo);