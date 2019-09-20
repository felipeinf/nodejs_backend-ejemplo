const express = require('express');
const controlador = require('./controlador');
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

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const usuario = await controlador.obtenerUsuario(id);

        res.status(200).send({
            error:'',
            body: usuario
        });
    } 
    catch (error) {
        res.status(500).send({
            error: 'Error inesperado',
            body:''
        });
    }
});

router.patch('/:id', async (req, res) => {
    const body = req.body;
    const id = req.params.id;

    try {
        const usuario = await controlador.modificarUsuario(id, body.nombre);

        res.status(200).send({
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

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const usuario = await controlador.eliminarUsuario(id);

        res.status(200).send({
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

module.exports = router;