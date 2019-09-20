const tarea = require('../componentes/tarea/red');
const usuario = require('../componentes/usuario/red');

const rutear = function(servidor) {
    servidor.use('/tarea', tarea);
    servidor.use('/usuario', usuario);
}

module.exports = rutear;