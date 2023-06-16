const mongoose = require('mongoose');
const URI = 'mongodb://0.0.0.0/proyectoFinal';
//localhost/proyectoFinal';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))
module.exports = mongoose;
