'use strict'
//Importamos validator para validar cualquier tipo de dato
var validator= require('validator');
const { geoSearch } = require('../models/cliente');
const cliente = require('../models/cliente');
//Importo el modelo
var ClienteModelo=require('../models/cliente')


//Creamos un controlador
var controller={
    //Métodos de prueba
    /*
    datosCurso:(req,res)=>{
        var hola=req.body.hola;
        return res.status(200).send({
            prueba: 'Prueba para configurar el servidor en proyecto',
            autor: 'Carolina',
            hola
        });
    },
    test:(req,res)=>{
        return res.status(200).send({
            message:'Soy la acción test de mi controlador de clientes'
        });
    },*/
    //Métodos útiles

    //MÉTODO PARA GUARDAR DATOS EN LA BASE DE DATOS clientesCitas DE MONGODB
    save:(req,res)=>{
        //Recoger los parámetros por post
        var params=req.body;
        console.log(params);
        //Validar datos (validator) de los parámetros
        try{
            //Se comprueba si params.nombre no está vacío para validarlo, en caso de que no muestra mensaje de error
            var validate_nombre=!validator.isEmpty(params.nombre);
            //Se comprueba si params.apellidos no está vacío para validarlo, en caso de que no muestra mensaje de error
            var validate_apellidos=!validator.isEmpty(params.apellidos);
            //Se comprueba si params.tratamiento no está vacío para validarlo, en caso de que no muestra mensaje de error
            var validate_tratamiento=!validator.isEmpty(params.tratamiento);
            //Se comprueba si params.fecha no está vacío para validarlo, en caso de que no muestra mensaje de error
            var validate_fecha=!validator.isEmpty(params.fecha);
            //Se comprueba si params.hora no está vacío para validarlo, en caso de que no muestra mensaje de error
            var validate_hora=!validator.isEmpty(params.hora);
        }catch(err){
            return res.status(200).send({
                status:'error',
                message:'Faltan datos por enviar'
            });
        }
        if(validate_nombre && validate_apellidos && validate_tratamiento && validate_fecha && validate_hora){
             //Crear el objeto a guardar
            var datosCliente=new cliente();
            //Asignar valores al objeto
            datosCliente.nombre= params.nombre;
            datosCliente.apellidos=params.apellidos;
            datosCliente.tratamiento=params.tratamiento;
            datosCliente.fecha=params.fecha;
            datosCliente.hora=params.hora;

            //Guardar el articulo
            datosCliente.save((err,clienteGuardado)=>{
                //Mensaje de error en caso de que los datos no se guarden correctamente
                if(err || !clienteGuardado){
                    return res.status(404).send({
                        status:'error',
                        message: 'Los datos del cliente no se han guardado'
                    });
                
                }
                //Devolver respuesta en caso de que los datos se guarden correctamente en clienteGuardado

                return res.status(200).send({
                    status:'success',
                    datosCliente:clienteGuardado
                });
            });
    
        }else{
            return res.status(404).send({
                status:'error',
                message:'Los datos no son validos'
            });
        }
    
    
    },
     //MÉTODO BUSCADOR DE DATOS DE LAS CITAS
    search:(req,res)=>{
        //Sacar el String a buscar nombre, apellidos y hora
        var buscarNombre=req.params.nombre;
        var buscarApellidos=req.params.apellidos;
        var buscarHora=req.params.hora;

        console.log(buscarNombre);
        
        //Find
        cliente.find(
            //Si searchString está incluido dentro de nombre me saca los articulos
            { "nombre":buscarNombre, "apellidos":buscarApellidos,"hora":buscarHora},
        
        //Ordeno de manera descendente
        ).sort()
        .exec((err,resultados)=>{

            if(err){
                return res.status(500).send({
                    status:'error',
                    message:'Error en la petición'
                });
            }
            if(resultados==""){
                return res.status(404).send({
                    status:'error',
                    message:'No hay resultados en la búsqueda'
                });
            }
            return res.status(200).send({
                status:'success',
                resultados
            });
        });

    
    }

    
};//end controller
//exporto controller
module.exports=controller;