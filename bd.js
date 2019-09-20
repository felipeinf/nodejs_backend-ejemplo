const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

exports.uriConexion = async function (uri) {
    const opciones = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    try {
        await mongoose.connect(uri, opciones);
        console.log('Conexión exitosa');
    } 
    catch (error) {
        console.error(error);
    }
}