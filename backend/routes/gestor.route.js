// Defino controlador para el manejo de CRUD
const gestorCtrl = require('./../controllers/gestor.controller');

// Creamos el manejador de rutas
const express = require('express');
const router = express.Router();

// Definimos las rutas para la gestion de producto
router.get('/', gestorCtrl.getGestores);
router.get('/:id', gestorCtrl.getGestor);
router.post('/', gestorCtrl.createGestor);
router.delete('/:id', gestorCtrl.deleteGestor);
router.put('/:id', gestorCtrl.editGestor);

// Exportamos el modulo de rutas
module.exports = router;