const repositorio = require('./repositorio');

function agregarUsuario(nombre) {
    if(!nombre) {
        return Promise.reject('Datos invalidos');
    }
    
    const usuario = {
        nombre: nombre,
        creado: new Date(),
        modificado: new Date()
    }

    return repositorio.agregarUsuario(usuario);
}

function obtenerUsuarios() {
    return repositorio.obtenerUsuarios();
}

module.exports = {
    agregarUsuario,
    obtenerUsuarios
}