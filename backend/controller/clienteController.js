'use strict'

//Creamos un controlador
var controller={
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
    }
};//end controller
//exporto controller
module.exports=controller;