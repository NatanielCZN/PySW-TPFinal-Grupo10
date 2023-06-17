const Reserva = require('../models/reserva');
const Usuario = require('../models/usuario')
const reservaCtrl = {};

/**
  * recupera las todas las reservas (GET)
  * @param {*} req 
  * @param {*} res 
  */
reservaCtrl.getReservas = async (req, res) => {
    let criteria = {}
    var reservas = await Reserva.find(criteria);
    res.json(reservas);
};

/**
 * ALta de una reserva (POST)
 * @param {*} req 
 * @param {*} res 
 */
reservaCtrl.createReserva = async (req, res) => {
    try {
        const reserva = new Reserva(req.body);
        const usuario = await Usuario.findById(req.body.usuario);
        await reserva.save();
        usuario.reservas.push(reserva._id);
        await Usuario.updateOne({ _id: req.body.usuario }, usuario)
        res.status(200).json({
            "status": "1",
            "msg": "reserva guardada"
        })
    } catch (error) {
        res.status(400).json({
            "status": "0",
            "msg": "error al guardar reserva"
        })
    }
}

/**
 * recupera una reserva (GET/:id)
 * @param {*} req 
 * @param {*} res 
 */
reservaCtrl.getReserva = async (req, res) => {
    const reserva = await Reserva.findById(req.params.id);
    res.json(reserva);
};

/**
 * edita una reserva (PUT/:id)
 * @param {*} req 
 * @param {*} res 
 */
reservaCtrl.editReserva = async (req, res) => {
    const vreserva = new Reserva(req.body);
    try {
        await Reserva.updateOne({ _id: req.body._id }, vreserva);
        res.json({
            status: "1",
            msg: "Reserva Actualizada",
        });
    } catch (error) {
        res.status(400).json({
            status: "0",
            msg: "Error en la actualizacion",
        });
    }
};

/**
 * Borra una reserva (DELETE/:id)
 * @param {*} req 
 * @param {*} res 
 */
reservaCtrl.deleteReserva = async (req, res) => {
    try {
        const reserva =await Reserva.findById({_id:req.params.id})
        const usuario = await Usuario.findById({_id:reserva.usuario});
        const index = usuario.reservas.findIndex(reser => reser.equals(reserva._id));
        if (index !== -1){
            usuario.reservas.splice(index,1);
        }
        await Usuario.updateOne({_id:reserva.usuario},usuario);
        await Reserva.deleteOne({ _id: req.params.id });
        res.json({
            status: "1",
            msg: "Reserva removida",
        });
    } catch (error) {
        res.status(400).json({
            status: "0",
            msg: "Error procesando la operacion",
        });
    }
};





module.exports = reservaCtrl;