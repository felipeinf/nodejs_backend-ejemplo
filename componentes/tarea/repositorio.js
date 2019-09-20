const Model = require('./modelo');

function agregarTarea(tarea) {
    const nuevaTarea = new Model(tarea);
    return nuevaTarea.save();
}

function obtenerTareasUsuario(idUsuario) {
    return Model.find({ usuario: idUsuario }).populate('usuario').exec();
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