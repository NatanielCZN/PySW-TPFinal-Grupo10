// Defino controlador para el manejo de CRUD
const usuarioCtl = require('./../controllers/usuario.controller');

// Creamos el manejador de rutas
const express = require('express');
const route = express.Router();

route.get("/",usuarioCtrl.getUsuarios);
route.post("/",usuarioCtrl.createUsuario);
route.get("/:id",usuarioCtrl.getUsuario);
route.put("/:id",usuarioCtrl.edidUsuario);
route.delete("/:id",usuarioCtrl.deleteUsuario);

module.exports=route;

// Exportamos el modulo de rutas
module.exports = route;