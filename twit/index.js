//Importamos la librería twit
var Twit = require('twit');

var tweet2;
//Constructor con los datos de autenticación

var T = new Twit({
    consumer_key:         'sgBq0j1yRdi6AfTO04BqRITDJ',
    consumer_secret:      'pY8Dk59StnlwncuUqG326wmDyXhWbiF7FIeFBJWTDKLd8RNmKU',
    access_token:         '1516754972527968256-FjLYSh673vWQbE3VkB76bcV4SFUZkF',
    access_token_secret:  'dKComZd7pQ5dUT732g1z8C86HEHgK9aDxidSMZsjqbqG3',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
});

function escribirTweet(){
    //Tweet que indica a los usuarios que pueden twitear con el hashtag beautyBotComentanos para escribir ideas, comentarios
    console.log(tweet2);
    T.post('statuses/update', {status: 'Si quieres contarnos algo puedes escribirnos con el hashtag beautyBotComentanos, esperamos vuestros tweets :) ' }, function(err, resultado2) {
            console.log(resultado2)
    })
}
function retwitear(){
    //Buscar los tweets con el hashtag beautyBotComentanos, en caso de que se encuentren resultados se hace retweet
T.get('search/tweets', { q: 'beautyBotComentanos', count: 100 }, function(err, data) {
    if(err) return callback(err);

    console.log(data)
    
    var tweet=data.statuses;
    for(i of tweet){
        console.log(i.id_str);
        let id_usuario=i.id_str;
        //Retwiteamos cogiendo como parámetro el id del usuario
        T.post('statuses/retweet/:id', { id:id_usuario }, function(err, resultado) {
            console.log(resultado)
        })
    
    }
    
    });
}

escribirTweet();
retwitear();
    