# Reporte-coronavirus-api

Reporte-coronavirus-api es un proyecto que pretende fungir como BackEnd para la gestión de contactos integrada al proyecto [Reporte-Coronavirus](https://github.com/fjml1983/reporte-coronavirus) mediante una API REST.

Se encuentra desarrollada con apoyo de Express.js y se vincula a una base de datos en MySQL server.  El script de la base de datos puede ser descargado desde este [enlace al script](https://drive.google.com/file/d/1rsukYSpw8Xobk-6q1dHa0YSU5rR4Sryn/view?usp=sharing).

Para arrancar el proyecto basta con descargarlo en una carpeta, asegurarse que se tiene la última versión de Node.js y dentro de la carpeta ejecutar los comandos:

`npm update` para descargar las dependencias del proyecto

`npm start` para arrancar la API, y se debe obtener el mensaje: 
> Contacto API Iniciado en el puerto : 8090
> 
Lo cual indica que la API ya se encuentra en funcionamiento y será posible realizar alguna de las siguientes peticiones a esta:

> Obtener todos los contactos, eg: `http://localhost:8090/api/contactos`

> Obtener un contacto por su ID, eg: `http://localhost:8090/api/contacto/1` via GET

> Insertar un contacto, eg: `http://localhost:8090/api/contacto/guardar` via POST y con un BODY raw de tipo JSON como el siguiente: `{email:'nuevo@email.com', mensaje:'Contenido mensaje nuevo'}`

> Actualizar un contacto, eg: `http://localhost:8090/api/contacto/actualizar` via POST y con un BODY raw de tipo JSON como el siguiente: `{id:1, email:'actualizado@email.com', mensaje:'Contenido actualizado'}`

> Eliminar un contacto, eg: `http://localhost:8090/api/contacto/1` via DELETE


#### Conexión a la Base de datos

Esta puede ser configurada mediante la modificación del archivo **dbconfig.js**

#### Puerto de inicio de la API

Actualmente es el puerto **8090** pero puede ser configurado modificando en el archivo **api.js** la línea:

`var port = process.env.PORT || 8090; `


#### LIVE DEMO
Pude accederse a una versión completamente funcional de la API publicada en Heroku y respaldada por ClearDB MySQL mediante las rutas ya descritas sobre el siguiente enlace:

https://reporte-coronavirus-api.herokuapp.com/

