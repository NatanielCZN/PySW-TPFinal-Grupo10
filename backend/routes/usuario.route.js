// Defino controlador para el manejo de CRUD
const usuarioCtl = require('./../controllers/usuario.controller');

// Creamos el manejador de rutas
const express = require('express');
const route = express.Router();

route.get("/",usuarioCtl.getUsuarios);
route.post("/",usuarioCtl.createUsuario);
route.get("/:id",usuarioCtl.getUsuario);
route.put("/:id",usuarioCtl.edidUsuario);
route.delete("/:id",usuarioCtl.deleteUsuario);

module.exports=route;

// Exportamos el modulo de rutas
module.exports = route;