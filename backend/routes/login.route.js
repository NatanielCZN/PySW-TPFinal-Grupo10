const loginCtrl = require('./../controllers/login.controller')

const express = require('express')
const route = express.Router();

route.post("/", loginCtrl.createUser);
route.post("/login", loginCtrl.loginUser);

module.exports = route;

