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

function modificarTarea(id, descripcion) {
    return new Promise((resolve, reject) => {
        Model.findOne({
            _id: id
        },
        (error, tarea) => {
            if(error){
                reject(error);
            }
    
            tarea.descripcion = descripcion;
            resolve(tarea.save());
        });
    });  
}

function eliminarTarea(id) {
    return new Promise((resolve, reject) => {
        Model.deleteOne({
            _id: id
        },
        (error) => {
            if(error) {
                reject(error);
            }
        });
    });
}

module.exports = {
    agregarTarea,
    obtenerTareasUsuario,
    modificarTarea,
    eliminarTarea
};