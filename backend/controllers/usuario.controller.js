const usuario = require('../models/usuario');
const Usuario= require('../models/usuario');
const usuarioCtl={};

usuarioCtl.createUsuario = async(req,res)=>{
  try{
    const usuario = new Usuario(req.body);
       await usuario.save();
       res.status(200).json({
        "status":"1",
        "msg":"Se guardo el usuario"
       })
  }catch (error){
     res.status(400).json({
        "status":"0",
        "msg":"No se guardo el usuario: "+error
     })
  }
}

usuarioCtl.getUsuarios = async(req,res)=>{
    const usuarios = await Usuario.find();
    res.json(usuarios);
}

usuarioCtl.getUsuario= async(req,res )=>{
    const user = await Usuario.findById(req.params.id).populate("reservas");

    res.json(user);
}

usuarioCtl.findEmail=async (req,res)=>{
   try {
      const existingUser = await usuario.findOne({ email: req.body.email });
      if (existingUser) {
        res.json(true); // El correo electrónico existe
      } else {
        res.json(false); // El correo electrónico no existe
      }
    } catch (error) {
      res.status(400).json({
        status: "0",
        msg: "No se encuentra el usuario"
      });
   }
}

usuarioCtl.edidUsuario= async(req,res)=>{
   const user = new Usuario(req.body);
   try{
          await Usuario.updateOne({_id:req.body._id},user);
          res.json({
            status: "1",
            msg: "Usuario Actualizado",
        });
   }catch(error){
    res.status(400).json({
      status: "0",
      msg: "Error en la actualizacion de usuario",
    })
   }
}

usuarioCtl.deleteUsuario=async(req,res)=>{
    try{
         await Usuario.deleteOne({_id:req.params.id});
         res.json({
          status: "1",
             msg: "usuario Eliminado",
         })
    }catch(erro){
      res.json({
        status: "0",
           msg: "Error al eliminar usuario",
       })
    }
}


module.exports = usuarioCtl;