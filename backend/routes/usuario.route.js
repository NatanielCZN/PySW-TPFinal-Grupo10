// Defino controlador para el manejo de CRUD
const usuarioCtrl = require('./../controllers/usuario.controller');

// Creamos el manejador de rutas
const express = require('express');
const router = express.Router();

// Definimos las rutas para la gestion de producto
router.get('/', usuarioCtrl.getUsuarios);
router.get('/:id', usuarioCtrl.getUsuario);
router.post('/', usuarioCtrl.createUsuario);
router.delete('/:id', usuarioCtrl.deleteUsuario);
router.put('/:id', usuarioCtrl.editUsuario);

// Exportamos el modulo de rutas
module.exports = router;