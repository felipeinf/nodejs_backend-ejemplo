const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nombreSchema = "tarea";

const modelo = new Schema({
    usuario: {
        type: Schema.ObjectId,
        ref: "usuario"
    },
    descripcion: String,
    creado: Date,
    modificado: Date
});

const Model = mongoose.model(nombreSchema, modelo);
module.exports = Model;