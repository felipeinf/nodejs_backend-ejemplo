const Model = require('./modelo');

function agregarTarea(tarea) {
    const nuevaTarea = new Model(tarea);
    return nuevaTarea.save();
}

function obtenerTareasUsuario(idUsuario) {
    const tareas = Model.find({
        usuario: idUsuario
    }, 
    (error) => {
        if(error) {
            Promise.reject(error);
        }
    });

    return tareas.populate('usuario').exec();
}

module.exports = {
    agregarTarea,
    obtenerTareasUsuario
};