const express = require ('express');
const router= express.Router ();
const crearUsuarioController = require ('../Controllers/crearUsuarioController'); // Tengo que importar o requerir el controlador que quiero utilizar para las rutas.
const multer = require('multer');

const validacionRegistro = require ("../middlewares/validacionRegistro")
const multerRegistro = require ("../middlewares/multerRegistro");



router.get ("/", crearUsuarioController.crear); // aca tengo que combinar ruta y controlador. Solo pongo la referencia en el segundo parámetro. Modularizamos la funcionalidad por un laso y la ruta por otro.
router.post ("/", multerRegistro.any(), validacionRegistro, crearUsuarioController.crearUsuario); //upload.any o upload.single se agrgegan en router como si fuese un middleware para poder capturar las imagenes que suben.
module.exports = router;