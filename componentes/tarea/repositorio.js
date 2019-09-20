const Model = require('./modelo');

function agregarTarea(tarea) {
    const nuevaTarea = new Model(tarea);
    return nuevaTarea.save();
}

function obtenerTareasUsuario(idUsuario) {
    return new Promise((resolve, reject) => {
        Model.find({
            usuario: idUsuario
        }, 
        (error, tareas) => {
            if(error) {
                reject(error);
            }
    
            resolve(tareas.populate('usuario').exec());
        });
    });
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
        Model.findOneAndDelete({
            _id:id
        }, 
        (error, tarea) => {
            if(error) {
                reject(error);
            }
            
            resolve(tarea);
        });
    });
}

module.exports = {
    agregarTarea,
    obtenerTareasUsuario,
    modificarTarea,
    eliminarTarea
};