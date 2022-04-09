'use strict'

var mongoose=require('mongoose');
var Schema= mongoose.Schema;

//Configuración del esquema, propiedades que va a tener mi objeto
var clienteSchema=Schema({
    nombre:String,
    apellidos:String,
    tratamiento:String,
    date:Date
});

module.exports=mongoose.model('Cliente',clienteSchema);
