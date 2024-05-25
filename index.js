//importacion de librerias 
require('dotenv').config();
const express = require('express')

//importacion de archivos propios(controllers, routes, etc...)
const dbConnect = require('./src/database/connection');
const RUTAS_ALUMNOS = require('./src/routes/alumnos');

//instanciacion de express (servidor)
const app = express()


//declaraciones del servidor (rutas que se usan, middlewares, etc...)
app.use(express.json());
app.use('/alumnos', RUTAS_ALUMNOS);

//inicializacion del servidor
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
    dbConnect();  //recien ahi conecto la DB
})