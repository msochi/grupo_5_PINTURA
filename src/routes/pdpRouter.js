
const express = require ('express');
const router= express.Router ();
const pdpController = require ('../controllers/pdpController'); // Tengo que importar o requerir el controlador que quiero utilizar para las rutas.


router.get ("/", pdpController.pdp); // aca tengo que combinar ruta y controlador. Solo pongo la referencia en el segundo parámetro. Modularizamos la funcionalidad por un laso y la ruta por otro.
//router.get ('/buscarproducto', pdpController.buscarproducto);
router.get ('/:id', pdpController.producto);
module.exports = router;