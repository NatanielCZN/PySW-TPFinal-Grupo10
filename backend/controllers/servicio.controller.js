const Servicio = require('../models/servicio');
const Gestor = require('../models/gestor');
const servicioCtrl = {}

servicioCtrl.getServicio = async (req, res) => { //se define una funcion asincrona
    var servicios = await Servicio.find();
    res.json(servicios);
}

servicioCtrl.createServicio = async (req, res) => {
    var servicio = new Servicio(req.body);
    try {
        await servicio.save();
        const gestor= await Gestor.findById({_id:req.body.gestor});
        gestor.servicio.push(servicio._id);
        await Gestor.updateOne({_id:req.body.gestor},gestor);
        res.json({
            'status': '1',
            'msg': 'Servicio guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

servicioCtrl.editServicio = async (req, res) => {
    try {
        const { id } = req.params;
        req.body;
        await Servicio.findByIdAndUpdate( { _id: id },req.body, {new: true,});
      
        res.json({
            status: '1',
            msg: 'Servicio Modifiado'
        });

    } catch (err) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
};

servicioCtrl.deleteServicio = async (req, res) => {
    try {
        await Servicio.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Servicio eliminado'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}


module.exports = servicioCtrl;