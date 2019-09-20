const tarea = require('./componentes/tarea/red');
const usuario = require('./componentes/usuario/red');

const usarRutas = function(servidor) {
    servidor.use('/tarea', tarea);
    servidor.use('/usuario', usuario);
}

module.exports = usarRutas;