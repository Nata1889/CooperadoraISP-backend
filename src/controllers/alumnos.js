const MDB_ALUMNOS = require('../database/schemas/alumnos');

const obtenerAlumnos = async (req, res) => {

    const response = await MDB_ALUMNOS.find();

    res.send(response);
} 

const crearAlumnos = async (req, res) => {
    const response = await MDB_ALUMNOS.create({
        nombre: 'natanael',
        apellido: 'sasia',
        dni:'43164272',
        direccion: '25 de mayo 2698',
        telefono: '3494517621',
        email: 'natanaelsasia@gmail.com',
        fecha_nacimiento: new Date()
    })
    res.send(response);
}

module.exports = {
    obtenerAlumnos,
    crearAlumnos
}