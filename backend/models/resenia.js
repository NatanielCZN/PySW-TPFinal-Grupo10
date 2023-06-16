const mongoose = require('mongoose');
const Servicio = require ('./servicio');
const Usuario = require ('./usuario');
const { Schema } = mongoose;
const ReseniaSchema = new Schema({
    valoracion: { type: Number, required: true },//valorar de 1 a 5
    fechaAlta: { type: String, required: true },//String

    imagen:{type:String,required:true},//imagenn de algo que quiera añadir
    texto:{type:String, required: true},
    //comentario:{type:String, required: true},//comentario de una resenia debe ser opcional pero cre q seria otro model

   // reseniaServicio: {type: Schema.Types.ObjectId, ref: Servicio, required: true},//datos del usuario q realiza el comentario
//reseniaUsuario: {type: Schema.Types.ObjectId, ref: Usuario, required: true}//datos del usuario q realiza el comentario

})
module.exports = mongoose.models.Resenia || mongoose.model('Resenia', ReseniaSchema);