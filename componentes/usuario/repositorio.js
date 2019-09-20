const Model = require('./modelo');

function agregarUsuario(usuario) {
    const nuevoUsuario = new Model(usuario);
    return nuevoUsuario.save();
}

function obtenerUsuarios() {
    return Model.find();   
}

function obtenerUsuario(id) {
    return Model.findOne({_id: id});   
}

function modificarUsuario(id, usuario) {
    return Model.findOneAndUpdate({_id: id}, usuario);    
}

function eliminarUsuario(id) {
    return Model.findOneAndDelete(id);
}

module.exports = {
    agregarUsuario,
    obtenerUsuarios,
    obtenerUsuario,
    modificarUsuario,
    eliminarUsuario
}