const mongoose = require('mongoose');

const Resenia = require('./resenia');

const { Schema } = mongoose;

const ServicioSchema = new Schema({
    nombre: { type: String, required: true },
    categoria: { type: String, required: true },
    ubicacion: { type: String, required: true },
    calificacionTotal: { type: Number, required: true },
    resenia: [{type: Schema.Types.ObjectId, ref: Resenia, required: true }],
    usernameGestor: { type: String, required: true }
})

module.exports = mongoose.models.Servicio || mongoose.model('Servicio', ServicioSchema);