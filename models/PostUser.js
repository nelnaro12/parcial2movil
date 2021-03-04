const mongoose = require('mongoose');

const PostSchemaUsers = mongoose.Schema({
    nombresUsuario:{
        type: String,
        require: true
    },

    apellidosUsuario:{
        type: String,
        require: true,
        max: 25
    },

    cIUsuario:{
        type: String,
        require: true,
        max: 10
    },

    sexoUsuario:{
        type: String,
        require: true
    },

    cargoUsuario:{
        type: String,
        require: true
    }

});

module.exports = mongoose.model('dbpruebaUsuarios', PostSchemaUsers);