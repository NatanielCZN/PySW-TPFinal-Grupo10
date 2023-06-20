// Defino controlador para el manejo de CRUD
const adminCtrl = require('./../controllers/admin.controller');

// Creamos el manejador de rutas
const express = require('express');
const router = express.Router();

// Definimos las rutas para la gestion de producto
router.get('/', adminCtrl.getAdmins);
router.get('/:id', adminCtrl.getAdmin);
router.post('/', adminCtrl.createAdmin);
router.delete('/:id', adminCtrl.deleteAdmin);
router.put('/:id', adminCtrl.editAdmin);

// Exportamos el modulo de rutas
module.exports = router;