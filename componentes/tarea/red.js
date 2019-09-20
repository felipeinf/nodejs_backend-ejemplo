const express = require('express');
const router = express.Router();
const controlador = require('./controlador');

router.post('/:uid', async (req, res) => {
    const body = req.body;
    const idUsuario = req.params.uid;
    
    try {
        const tarea = await controlador.agregarTarea(idUsuario, body.descripcion);
        
        res.status(201).send({
            error: '',
            body: tarea
        });
    } 
    catch (error) {
        res.status(400).send({
            error: 'Error inesperado',
            body: ''
        });
    }
});
 
router.get('/:uid', async (req, res) => {
    const idUsuario = req.params.uid;
   
    try {
        const tareas = await controlador.obtenerTareasUsuario(idUsuario);

        res.status(200).send({
            error: '',
            body: tareas
        });
    } 
    catch (error) {
        res.status(500).send({
            error: 'Error inesperado',
            body: ''
        });
    }
});

module.exports = router;