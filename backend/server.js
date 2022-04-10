'use strict'
//Llamamos a mongoose
var mongoose=require('mongoose');
//importamos servidor.js
var app=require('./servidor');
//Indicamos el puerto
var port=3900;


//Conexión a la base de datos clientesCitas en mongoDB
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/clientesCitas',{useNewUrlParser: true}).then(()=>{
    console.log('La conexión a la bbdd se ha realizado bien');

    //Crear el servidor y ponerse a escuchar peticiones HTTP
    app.listen(port,()=>{
        console.log('Servidor corriendo en http:/localhost'+port);
    });

})


