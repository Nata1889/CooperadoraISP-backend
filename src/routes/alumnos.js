const express = require('express');
const RUTAS_ALUMNOS = express.Router();
const {obtenerAlumnos, crearAlumnos} = require('../controllers/alumnos');

RUTAS_ALUMNOS
    .route('/')
    .get(obtenerAlumnos)
    .post(crearAlumnos)

module.exports = RUTAS_ALUMNOS;