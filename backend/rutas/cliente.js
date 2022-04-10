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
router.post('/save',clienteController.save);

module.exports= router;