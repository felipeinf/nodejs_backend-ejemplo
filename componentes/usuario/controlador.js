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

function obtenerUsuario(id) {
    if(!id) {
        Promise.reject('Datos invalidos');
    }

    return repositorio.obtenerUsuario(id);
}

function modificarUsuario(id, nombre) {
    if(!id || !nombre) {
        Promise.reject('Datos invalidos');
    }
    
    const usuario = {
        nombre: nombre,
        modificado: new Date()
    }

    return repositorio.modificarUsuario(id, usuario);
}

function eliminarUsuario(id) {
    if(!id) {
        Promise.reject('Datos invalidos');
    }

    return repositorio.eliminarUsuario(id);
}

module.exports = {
    agregarUsuario,
    obtenerUsuarios,
    obtenerUsuario,
    modificarUsuario,
    eliminarUsuario
}