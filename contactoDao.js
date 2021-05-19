const config = require('./dbconfig');//Instanciamos el archivo dbconfig para deploy
const util = require('util');//Se necesita para asyncroinificar la libreria de mysql
const mysql = require('mysql');//Se necesita paquete mysql

const db = makeDb(config); //crear acceso a BD asincronificadamente

//Asincronificar mysql, ver: https://codeburst.io/node-js-mysql-and-async-await-6fb25b01b628
function makeDb(cfg) {
    const connection = mysql.createConnection(cfg);
    return {
      query( sql, args ) {
        return util.promisify( connection.query )
          .call( connection, sql, args );
      },
      close() {
        return util.promisify( connection.end ).call( connection );
      }
    };
  }

// devuelve todos los contactos en la base de datos
async function getContactos(){
    try {
        const resultset = await db.query('SELECT * FROM contactos');
        console.log(resultset)
        return resultset;
    } catch (error) {
        console.log(error);
    }
}

async function insertContacto(contacto) {
    try {
        //console.log("EL CONTACTOJSON:" + JSON.stringify(contacto));
        const resultset = await db.query('CALL insert_contacto(?,?)', [contacto.email, contacto.mensaje]);
        return resultset;
    }
    catch (err) {
        console.log(err);
    }
}

async function updateContacto(contacto) {
    try {
        try {
            //console.log("EL CONTACTOJSON:" + JSON.stringify(contacto));
            const resultset = await db.query('CALL update_contacto(?,?,?)', [contacto.id, contacto.email, contacto.mensaje]);
            return resultset;
        }
        catch (err) {
            console.log(err);
        }
    }
    catch (err) {
        console.log(err);
    }
}

async function deleteContacto(id) {
    try {
        const resultset = await db.query('CALL delete_contacto(?)', id);
        return resultset;
    }
    catch (err) {
        console.log(err);
    }
}

async function getContactoById(id) {
    try {
        const resultset = await db.query( 'SELECT * FROM contactos where id = ?', [id]);
        return resultset;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getContactos : getContactos,
    getContactoById : getContactoById,
    insertContacto : insertContacto,
    updateContacto : updateContacto,
    deleteContacto : deleteContacto
};



