'use strict'
//Cargo el módulo de express
var express= require('express');
//Cargo el controlador
var clienteController=require('../controller/clienteController');
//Llamo a Router de express
var router=express.Router();

//Rutas de prueba
//router.post('/datos-curso', clienteController.datosCurso);
//router.get('/test', clienteController.test);

//Rutas útiles
//Ruta para guardar los datos de las citas de los clientes
router.post('/save',clienteController.save);
//Ruta para buscar datos de las citas por nombre, apellidos y hora
router.get('/search/:nombre&:apellidos&:hora',clienteController.search);
module.exports= router;