//La responsabilidad de los archivos de Router son solo las rutas
const express = require ('express');
const router= express.Router ();
const loginController = require ('../controllers/loginController'); // Tengo que importar o requerir el controlador que quiero utilizar para las rutas.
const loginUser = require ('../middlewares/loginUser');
const usuarioLogueado= require ('../middlewares/usuarioLogueado');


router.get ("/", loginController.login); // aca tengo que combinar ruta y controlador. Solo pongo la referencia en el segundo parámetro. Modularizamos la funcionalidad por un laso y la ruta por otro.
router.get ("/logout", loginController.logout); // aca tengo que combinar ruta y controlador. Solo pongo la referencia en el segundo parámetro. Modularizamos la funcionalidad por un laso y la ruta por otro.
router.post ("/", loginUser, usuarioLogueado,loginController.checkUsuario); 

// rutas amdin

module.exports = router;