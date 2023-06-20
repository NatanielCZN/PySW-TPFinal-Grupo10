const Login = require('../models/login');
const loginCtrl = {};

loginCtrl.createUser = async (req, res) => {
    try {
        const user = new Login(req.body);

        await user.save();

        res.status(200).json({
            "status": "1",
            "msg": "Se registro el usuario"
        })
    } catch (error) {
        res.status(400).json({
            "status": "0",
            "msg": "No se pudo registrar el usuario"
        })
    }
}

loginCtrl.loginUser = async (req, res) => {
    const criteria = {
        username: req.body.username,
        password: req.body.password
    };

    try {
        const user = await Login.findOne(criteria); // ARREGLAR ESTO ----------------------------------------

        if (!user) {
            res.json({
                status: "0",
                msg: "Usuario no encontrado"
            });
        } else {
            res.json({
                status: "1",
                msg: "Encontrado",
                username: user.username,
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

module.exports = loginCtrl;