//CONEXIÓN CON LA API DE TWITTER V2

const { TwitterApi } = require('twitter-api-v2');

const cliente = new TwitterApi({
    appKey: 'sgBq0j1yRdi6AfTO04BqRITDJ',
    appSecret: 'pY8Dk59StnlwncuUqG326wmDyXhWbiF7FIeFBJWTDKLd8RNmKU',
    accessToken: '1516754972527968256-FjLYSh673vWQbE3VkB76bcV4SFUZkF',
    accessSecret: 'dKComZd7pQ5dUT732g1z8C86HEHgK9aDxidSMZsjqbqG3',
});

//Creación de tweets con v2
cliente.v1.tweet('Ahora que llega el veranito es importante que compres un buen bronceador para protegerte del sol. #beautyBotCenter')

    .then(response => console.log(response)) 
    .catch(error => console.error(error));

cliente.v1.tweet('Para tener siempre un aspecto radiante, es necesario que crees hábitos diarios para el cuidado de la piel de tu rostro y cuerpo. #beautyBotCenter')

    .then(response => console.log(response)) 
    .catch(error => console.error(error));

cliente.v1.tweet('Puedes seguirnos también por facebook, y si quieres desde nuestra web tenemos un servício de chatbot para asistirte en las dudas que tengas sobre nuestros tratamientos #beautyBotCenter')

    .then(response => console.log(response)) 
    .catch(error => console.error(error));

cliente.v1.tweet('¿Quién no se ha levantado alguna vez con la zona de debajo del ojo hinchada? Para reducir esta inflamación, puedes aplicar directamente una cuchara previamente congelada. #beautyBotCenter')

    .then(response => console.log(response)) 
    .catch(error => console.error(error));


cliente.v1.tweet('Puedes contactarnos desde nuestra página web #beautyBotCenter')

    .then(response => console.log(response)) 
    .catch(error => console.error(error));
