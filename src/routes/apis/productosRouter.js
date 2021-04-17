const express = require ('express');
const router= express.Router ();
const productosController = require ('../../controllers/apis/productosController'); // Tengo que importar o requerir el controlador que quiero utilizar para las rutas.

//router.get ("/login", pdpController.log);
router.get ("/", productosController.list); // aca tengo que combinar ruta y controlador. Solo pongo la referencia en el segundo parámetro. Modularizamos la funcionalidad por un laso y la ruta por otro.
//router.get ('/buscarproducto', pdpController.buscarproducto);
router.get ('/:id', productosController.detalle);

module.exports = router;