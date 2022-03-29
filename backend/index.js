'use strict'
var mongoose=require('mongoose');
mongoose.set('useFindAndModify',false);
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/clientesCitas',{useNewUrlParser: true}).then(()=>{
    console.log('La conexión a lfgfgfgfa bbdd se ha realizado bien');
})