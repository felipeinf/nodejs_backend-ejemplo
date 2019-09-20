const Model = require('./modelo');

function agregarTarea(tarea) {
    const nuevaTarea = new Model(tarea);
    return nuevaTarea.save();
}

async function obtenerTareasUsuario(idUsuario) {
    try {
        const tareas = await Model.find({ usuario: idUsuario });
        return tareas.populate('usuario').exec();
    } 
    catch (error) {
        Promise.reject(error);
    }
}

function modificarTarea(id, tarea) {
    return Model.findOneAndUpdate({_id: id}, tarea).populate('usuario').exec();
}

function eliminarTarea(id) {
    return Model.findOneAndDelete({_id: id}).populate('usuario').exec();
}

module.exports = {
    agregarTarea,
    obtenerTareasUsuario,
    modificarTarea,
    eliminarTarea
};