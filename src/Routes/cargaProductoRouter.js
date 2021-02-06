const express = require ('express');
const router= express.Router ();
const cargaProductoController = require ('../Controllers/cargaProductoController'); // Tengo que importar o requerir el controlador que quiero utilizar para las rutas.



router.get ("/", cargaProductoController.cargar); // aca tengo que combinar ruta y controlador. Solo pongo la referencia en el segundo parámetro. Modularizamos la funcionalidad por un laso y la ruta por otro.
router.post ("/", cargaProductoController.cargar); 

module.exports = router;