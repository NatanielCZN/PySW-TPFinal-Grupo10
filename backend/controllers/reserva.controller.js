const Reserva = require('../models/reserva');

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
        await reserva.save();
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