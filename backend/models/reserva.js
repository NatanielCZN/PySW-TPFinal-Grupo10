const mongoose = require('mongoose');

const Login = require('./login');

const { Schema } = mongoose;

const ReservaSchema = new Schema({
    numeroReserva: { type: Number, require: true },
    categoria: { type: String, require: true },
    cantidad: { type: Number, require: true },
    fechaAlta: { type: String, require: true },
    fechaIngreso: { type: String, require: true },
    fechaEgreso: { type: String, require: true },
    precio: { type: Number, require: true },
    reservado:{ type:Boolean,require:true },
    usuario:{type:mongoose.Schema.Types.ObjectId,ref: Login,require:true}
})

module.exports = mongoose.models.Reserva || mongoose.model('Reserva', ReservaSchema);