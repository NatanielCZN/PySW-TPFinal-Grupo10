const Gestor = require('../models/gestor');
const gestorCtrl = {}

/**
 * Recupera TODOS los Gestores (GET)
 * @param {*} req 
 * @param {*} res 
 */
gestorCtrl.getGestores = async (req, res) => {
    var gestores = await Gestor.find().populate("servicio");

    res.json(gestores);
}

/**
 * Recupera un Gestor (GET)
 * @param {*} req 
 * @param {*} res 
 */
gestorCtrl.getGestor = async (req, res) => {
    var gestor = await Gestor.find({_id: req.params._id}).populate("servicio");

    res.json(gestor);
}

/**
 * Da de alta un Gestor (POST)
 * @param {*} req 
 * @param {*} res 
 */
gestorCtrl.createGestor = async (req, res) => {
    var gestor = new Gestor(req.body);
    
    try {
        await gestor.save();

        res.json({
            'status': '1',
            'msg': 'Gestor registrado con exito.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al intentar registrar un Gestor.'
        })
    }
}

/**
 * Elimina un Gestor (DELETE) * 
 * @param {*} req 
 * @param {*} res 
 */
gestorCtrl.deleteGestor = async (req, res) => {
    try {
        await Gestor.deleteOne({ _id: req.params.id });
        
        res.json({
            status: '1',
            msg: 'Gestor removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al intentar eliminar un Gestor'
        })
    }
}

/**
 * Modifica un Gestor (PUT)
 * @param {*} req 
 * @param {*} res 
 */
gestorCtrl.editGestor = async (req, res) => {
    const gestor = new Gestor(req.body);

    try {
        await Gestor.updateOne({ _id: req.body._id }, gestor);

        res.json({
            'status': '1',
            'msg': 'Gestor updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al intentar modificar un Gestor'
        })
    }
}

module.exports = gestorCtrl;
