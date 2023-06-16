const usuarioCtl = require('./../controllers/usuario.controller')

const express = require('express')
const route = express.Router();

route.post("/",usuarioCtl.createUsuario);
route.post("/login",usuarioCtl.loginUsuario);

module.exports=route;

