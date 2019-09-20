const repositorio = require('./repositorio');

function agregarTarea(idUsuario, descripcion) {
    if(!idUsuario || !descripcion) {
        Promise.reject('Datos invalidos');
    }
    
    const tarea = {
        usuario: idUsuario,
        descripcion: descripcion,
        creado: new Date(),
        modificado: new Date()
    };

    return repositorio.agregarTarea(tarea);
}

function obtenerTareasUsuario(idUsuario) {
    return repositorio.obtenerTareasUsuario(idUsuario);
}

module.exports = {
    agregarTarea,
    obtenerTareasUsuario
};