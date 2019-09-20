const Model = require('./modelo');

function agregarUsuario(usuario) {
    const nuevoUsuario = new Model(usuario);
    return nuevoUsuario.save();
}

function obtenerUsuarios() {
    return new Promise((resolve, reject) => {
        Model.find((error, usuarios) => {
            if(error) {
                reject(error);
            }

            resolve(usuarios);
        })
    });
}

module.exports = {
    agregarUsuario,
    obtenerUsuarios
}