const express = require ('express');
const router= express.Router ();
const usuariosController = require ('../../controllers/apis/usuariosController'); // Tengo que importar o requerir el controlador que quiero utilizar para las rutas.

//router.get ("/login", pdpController.log);
router.get ("/", usuariosController.lista); // aca tengo que combinar ruta y controlador. Solo pongo la referencia en el segundo parámetro. Modularizamos la funcionalidad por un laso y la ruta por otro.
//router.get ('/buscarproducto', pdpController.buscarproducto);
router.get ('/:id', usuariosController.detalleUsuario);

module.exports = router;