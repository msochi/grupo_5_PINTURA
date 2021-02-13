const express = require ('express');
const router= express.Router ();
const checkOutController = require ('../Controllers/checkOutController'); // Tengo que importar o requerir el controlador que quiero utilizar para las rutas.


router.get ("/", checkOutController.checkOut); // aca tengo que combinar ruta y controlador. Solo pongo la referencia en el segundo parámetro. Modularizamos la funcionalidad por un laso y la ruta por otro.

module.exports = router;