const mongoose = require('mongoose');
const URI = 'mongodb://0.0.0.0/proyecto-final';
//const URI = 'mongodb://localhost/proyecto-final';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))
module.exports = mongoose;
