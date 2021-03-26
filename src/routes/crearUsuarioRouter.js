const express = require ('express');
const router= express.Router ();
const crearUsuarioController = require ('../controllers/crearUsuarioController'); // Tengo que importar o requerir el controlador que quiero utilizar para las rutas.

const registroValidacion = require ('../middlewares/registroValidacion');
const multerRegistro = require ('../middlewares/multerRegistro');



router.get ("/", crearUsuarioController.crear); // aca tengo que combinar ruta y controlador. Solo pongo la referencia en el segundo parámetro. Modularizamos la funcionalidad por un laso y la ruta por otro.
router.get('/buscar/:id',crearUsuarioController.buscarLocalidad);
//router.post ("/",registroValidacion, crearUsuarioController.revisarUsuario), 

router.post ("/", multerRegistro.any(), registroValidacion, crearUsuarioController.crearUsuario); //upload.any o upload.single se agrgegan en router como si fuese un middleware para poder capturar las imagenes que suben.

module.exports = router;