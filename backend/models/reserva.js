const mongoose = require('mongoose');

const { Schema } = mongoose;

const ReservaSchema = new Schema({
    numeroReserva: { type: Number, require: true },
    categoria: { type: String, require: true },
    cantidad: { type: Number, require: true },
    fechaAlta: { type: String, require: true },
    fechaIngreso: { type: String, require: true },
    fechaEgreso: { type: String, require: true },
    precio: { type: Number, require: true },
    reservado:{ type:Boolean,require:true }
})

module.exports = mongoose.models.Reserva || mongoose.model('Reserva', ReservaSchema);