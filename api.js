const contactoDao = require('./contactoDao');
const helmet = require("helmet");

//Requerido en todos
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { response } = require('express');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use('/api', router);//Ruta principal

//Ruta de bienvenida eg: http://localhost:8090
app.get("/", (request,response) =>{
    response.send("Bienvenido a la API reporte-coronavirus");
});

//Ruta para obtener todos los contactos, eg: http://localhost:8090/api/contactos
router.route('/contactos').get((request, response) =>{
    contactoDao.getContactos().then(resulset => {
        response.json(resulset);
    });  
});

//Ruta para una guardar un contacto,
//eg: http://localhost:8090/api/contacto/guardar por POST y con body raw json {email:'nuevo@email.com', mensaje:'Contenido mensaje'}
router.route('/contacto/guardar').post((request,response)=>{
    //console.log("BODY: " + request.body.email + " " + request.body.mensaje);
    let contacto = {...request.body};     //o tambien: let contacto = new Contacto(request.body.email, request.body.mensaje);
    contactoDao.insertContacto(contacto).then(resultset => {
       response.json(resultset);
    })
})

//Ruta para una actualizar una contacto, segun clase Contacto,
//eg: http://localhost:8090/api/contacto/actualizar por POST y con body raw json {"id":1, "email":"nuevo@email.com", "mensaje":"Contenido actualizado"}
router.route('/contacto/actualizar').post((request,response)=>{
    let contacto = {...request.body}
    contactoDao.updateContacto(contacto).then(result => {
       response.json(result);
    })
})

//Ruta para una eliminar una contacto, segun su id,
//eg: http://localhost:8090/api/contacto/eliminar/1 por DELETE
router.route('/contacto/eliminar/:id').delete((request,response)=>{
    contactoDao.deleteContacto(request.params.id).then(resultset => {
       response.json(resultset);
    })
})

//Ruta para una contacto por id, eg: http://localhost:8090/api/contacto/2
router.route('/contacto/:id').get((request,response)=>{
    contactoDao.getContactoById(request.params.id).then(result => {
        //console.log(result);
        response.json(result);
    })
})


//Inicializar el servicio
var port = process.env.PORT || 8090; //Declarando puerto de inicio
app.listen(port); //Puerto de escucha
console.log('Contacto API Iniciado en el puerto : ' + port); //Mensaje de inicio de servicio

