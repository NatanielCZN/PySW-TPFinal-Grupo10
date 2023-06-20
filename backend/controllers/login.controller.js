
const Usuario= require('../models/usuario');
const Gestor= require('../models/gestor');
const Admin = require('../models/admin');
const loginCtl={};

 
loginCtl.loginUsuario = async (req, res) => {
    const criteria = {
      username: req.body.username,
      password: req.body.password
    };
  
    try {
      const user = await Usuario.findOne(criteria);
      if(user){
        res.json({
          status: "1",
          msg: "Encontrado",
          userName: user.username,
          password: user.password,
          userId: user._id
        });
      }else{
        const gest=await Gestor.findOne(criteria);
        if(gest){
          res.json({
            status: "1",
            msg: "Encontrado",
            userName: gest.username,
            password: gest.password,
            userId: gest._id
          });
        }else{
          const admin = await Admin.findOne(criteria);
          if(admin){
            res.json({
              status: "1",
              msg: "Encontrado",
              userName: admin.username,
              password: admin.password,
              userId: admin._id
            });
          }else{
          res.json({
            status: "0",
            msg: "Usuario no encontrado"
          });
        }
        }
      }
    } catch (err) {
      res.json({
        status: "0",
        msg: "error: "+err
      });
    }
  }; 

module.exports = loginCtl;

