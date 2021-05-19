/* Usar esta configuración para manejar un servidor local de MySQL
const config = {
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'reporte-coronavirus',
}
*/

/*Configuración para publicar en Heroku para Live-Demo, accediendo a base de datos en ClearDB, ver: https://www.youtube.com/watch?v=dw1y7qwNb4E*/
const config = {
    host     : 'us-cdbr-east-03.cleardb.com',
    user     : 'ba2e2c568a34b8',
    password : 'ce7db48c',
    database : 'heroku_301ac79438da6e8',
}

module.exports = config;