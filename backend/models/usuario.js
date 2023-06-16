const mongoose = require('mongoose');

const login = require('./login')
const {Schema} = mongoose;
const UsuarioSchema=new Schema({
    ...login.schema.obj,//ATRIBUTOS HEREDADOS
    nombre:{type:String,required:true},
    perfil:{type:String,required:true}
})

module.exports= mongoose.models.Usuario || mongoose.model("Usuario",UsuarioSchema);