//defino controlador para el manejo de CRUD
const servicioCtrl = require('../controllers/servicio.controller');
const authCtl = require('../controllers/auth.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de producto
router.post('/', servicioCtrl.createServicio); //Dar de alta un servicio
router.get('/ubicacion', servicioCtrl.getServiciosLocalidad); // Obtener todas los servicios de una localidad
router.get('/:id', servicioCtrl.getServicio); // Obtener un servicio por ID
router.delete('/:id', servicioCtrl.deleteServicio); //Eliminar un servicio
router.put('/:id',servicioCtrl.editServicio); //Modificar un servicio
//exportamos el modulo de rutas
module.exports = router;