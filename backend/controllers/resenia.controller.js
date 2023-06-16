const Resenia = require('../models/resenia');
const reseniaCtrl = {}

reseniaCtrl.createResenia= async (req, res) => {
    var resenia = new Resenia(req.body);
    try {
        await resenia.save();
        res.status(200).json({
        'status': '1',
        'msg': 'Resenia guardado.'})
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando operacion.'})
    }
}
///mostrar uno solo
 
reseniaCtrl.getResenia = async (req, res) => {
    const resenia = await Resenia.findById(req.params.id).populate("reseniaServicio");
    //const resenia = await Resenia.findById(req.params.id).populate("reseniaUsuario");
    res.json(resenia);
}
 
/*reseniaCtrl.getResenias = async (req, res) => {//recupera todo
    var resenias = await Resenia.find().populate("reseniaServicio");
    //var resenias = await Resenia.find().populate("reseniaUsuario");
    res.json(resenias);
}*/
///**** muestra todas las renesnias con los id de usuario q lo creo y el id del servicio q realizo la resenia *****/
reseniaCtrl.getResenias = async (req, res) => {
    var resenias = await Resenia.find();
    res.json(resenias);
}
/*
reseniaCtrl.deleteResenia= async (req, res)=>{
    try {
    await Resenia.deleteOne({_id: req.params.id});
    res.json({
    status: '1',
    msg: 'Resenia removed'
    })
    } catch (error) {
    res.status(400).json({
    'status': '0',
    'msg': 'Error procesando la operacion'
    })
  }
}*/

/*
reseniaCtrl.modificarResenia = async (req, res) => {
    const vResenia= new Resenia(req.body);
    try {
        await Resenia.updateOne({_id: req.body._id}, vresenia);
        res.json({
        'status': '1',
        'msg': 'Resenia updated'
    })
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
  }
}*/

 
 


 



module.exports = reseniaCtrl;