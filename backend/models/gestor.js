const mongoose = require('mongoose');
// const servicio = require('./servicio');
const { Schema } = mongoose;

const GestorSchema = new Schema({
    nombre: { type: String, require: true },
    apellido: { type: String, require: true },
    email: { type: String, require: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
    dni: { type: String, require: true },
    fechaNacimiento: { type: String, require: true },
    edad: { type: Number, require: true },
    servicio: { type: String, require: true }

    // servicio: [{ type: Schema.Types.ObjectId, ref: servicio, require: true }]
})

module.exports = mongoose.models.Gestor || mongoose.model('Gestor', GestorSchema);