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
    if(!idUsuario) {
        return Promise.reject('Datos invalidos');
    } 
        
    return repositorio.obtenerTareasUsuario(idUsuario);
}

function modificarTarea(id, descripcion) {
    if(!id || !descripcion) {
        return Promise.reject('Datos invalidos');
    }
    
    return repositorio.modificarTarea(id, descripcion);
}

function eliminarTarea(id) {
    return repositorio.eliminarTarea(id);
}

module.exports = {
    agregarTarea,
    obtenerTareasUsuario,
    modificarTarea,
    eliminarTarea
};