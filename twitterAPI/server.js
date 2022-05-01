
//CONEXIÓN CON LA API DE TWITTER V1.1
//Importamos la librería de twitter
const Twitter=require ('twitter');

//Constructor de cliente que sirve para que Twitter identifique al usuario
const cliente= new Twitter({
    //Nos hacen falta estos datos de twitter developer para podernos conectar
    consumer_key: 'sgBq0j1yRdi6AfTO04BqRITDJ',
    consumer_secret: 'pY8Dk59StnlwncuUqG326wmDyXhWbiF7FIeFBJWTDKLd8RNmKU',
    access_token_key: '1516754972527968256-FjLYSh673vWQbE3VkB76bcV4SFUZkF',
    access_token_secret: 'dKComZd7pQ5dUT732g1z8C86HEHgK9aDxidSMZsjqbqG3'
})

//Creación de tweets en twitter BeautyBot
cliente.post('statuses/update',{status: 'Tenemos promociones del 10% de descuento en todos nuestros tratamientos hasta junio. ¿A qué esperas para venir a vernos? '})
.then((tweet)=>{
    //debug de la respuesta de la API de twitter
    console.log(tweet);
})
.catch((error)=>{
    console.log(error);
})

cliente.post('statuses/update',{status: 'Puedes seguirnos también por facebook, y si quieres desde nuestra web tenemos un servício de chatbot para asistirte en las dudas que tengas sobre nuestros tratamientos'})
.then((tweet)=>{
    //debug de la respuesta de la API de twitter
    console.log(tweet);
})
.catch((error)=>{
    console.log(error);
})

cliente.post('statuses/update',{status: 'Uno de los consejos más sencillos para mantener una piel sana. Al usar una crema hidratante facial con factor mínimo FPS 30, proteges tu rostro de los efectos de los rayos UVA.'})
.then((tweet)=>{
    //debug de la respuesta de la API de twitter
    console.log(tweet);
})
.catch((error)=>{
    console.log(error);
})

cliente.post('statuses/update',{status: 'Si no tienes colorete a mano, sustitúyelo por lápiz labial. Un pintalabios, bien aplicado, puede sustituir perfectamente a tu colorete habitual, aportando ese color tan bonito a tus mejillas.'})
.then((tweet)=>{
    //debug de la respuesta de la API de twitter
    console.log(tweet);
})
.catch((error)=>{
    console.log(error);
})

cliente.post('statuses/update',{status: 'Te informamos de que estamos en la calle Miguel Yuste, ¡Ven a conocernos!'})
.then((tweet)=>{
    //debug de la respuesta de la API de twitter
    console.log(tweet);
})
.catch((error)=>{
    console.log(error);
})