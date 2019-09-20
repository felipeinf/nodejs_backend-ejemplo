const tarea = require('./componentes/tarea/red');

const usarRutas = function(servidor) {
    servidor.use('/tarea', tarea);
}

module.exports = usarRutas;