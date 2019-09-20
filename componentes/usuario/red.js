const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const body = req.body;

    try {
        const usuario = await controlador.agregarUsuario(body.nombre);

        res.status(201).send({
            error:'',
            body: usuario
        });
    } 
    catch (error) {
        res.status(400).send({
            error: 'Error inesperado',
            body:''
        });
    }
});

router.get('/', async (req, res) => {
    try {
        const usuarios = await controlador.obtenerUsuarios();

        res.status(200).send({
            error:'',
            body: usuarios
        });
    } 
    catch (error) {
        res.status(500).send({
            error: 'Error inesperado',
            body:''
        });
    }
});

module.exports = router;