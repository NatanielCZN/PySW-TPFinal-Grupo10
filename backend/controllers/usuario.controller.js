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
        "msg":"No se guardo el usuario"
     })
  }
}
  
usuarioCtl.loginUsuario = async (req, res) => {
    const criteria = {
      userName: req.body.userName,
      password: req.body.password
    };
  
    try {
      const user = await Usuario.findOne(criteria);
      if (!user) {
        res.json({
          status: "0",
          msg: "Usuario no encontrado"
        });
      } else {
        res.json({
          status: "1",
          msg: "Encontrado",
          userName: user.userName,
          password: user.password,
          userId: user._id
        });
      }
    } catch (err) {
      res.json({
        status: "0",
        msg: "error"
      });
    }
  };

 

module.exports = usuarioCtl;