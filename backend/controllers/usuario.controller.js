const Usuario = require('../models/usuario');
const usuarioCtrl = {};

/**
 * Recupera TODOS los Usuarios (GET)
 * @param {*} req 
 * @param {*} res 
 */
usuarioCtrl.getUsuarios = async (req, res) => {
  var usuarios = await Usuario.find().populate("resenias", "reservas");

  res.json(usuarios);
}

/**
 * Recupera un Usuario (GET)
 * @param {*} req 
 * @param {*} res 
 */
usuarioCtrl.getUsuario = async (req, res) => {
  var usuario = await Usuario.find({ _id: req.params._id }).populate("resenias", "reservas");

  res.json(usuario);
}

/**
 * Da de alta un Usuario (POST)
 * @param {*} req 
 * @param {*} res 
 */
usuarioCtrl.createUsuario = async (req, res) => {
  var usuario = new Usuario(req.body);

  try {
    await usuario.save();

    res.json({
      'status': '1',
      'msg': 'Usuario registrado con exito.'
    })
  } catch (error) {
    res.status(400).json({
      'status': '0',
      'msg': 'Error al intentar registrar un Usuario.'
    })
  }
}

/**
 * Elimina un Usuario (DELETE) * 
 * @param {*} req 
 * @param {*} res 
 */
usuarioCtrl.deleteUsuario = async (req, res) => {
  try {
    await Usuario.deleteOne({ _id: req.params.id });

    res.json({
      status: '1',
      msg: 'Usuario removed'
    })
  } catch (error) {
    res.status(400).json({
      'status': '0',
      'msg': 'Error al intentar eliminar un Usuario'
    })
  }
}

/**
 * Modifica un Usuario (PUT)
 * @param {*} req 
 * @param {*} res 
 */
usuarioCtrl.editUsuario = async (req, res) => {
  const usuario = new Usuario(req.body);

  try {
    await Usuario.updateOne({ _id: req.body._id }, usuario);

    res.json({
      'status': '1',
      'msg': 'Usuario updated'
    })
  } catch (error) {
    res.status(400).json({
      'status': '0',
      'msg': 'Error al intentar modificar un Usuario'
    })
  }
}

module.exports = usuarioCtrl;
