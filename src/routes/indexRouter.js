// La responsabilidad de los archivos de Router son solo las rutas

const express = require ('express');
const router= express.Router ();
const indexController = require ('../Controllers/indexController'); // Tengo que importar o requerir el controlador que quiero utilizar para las rutas.


router.get ("/", indexController.index ); // aca tengo que combinar ruta y controlador. Solo pongo la referencia en el segundo parámetro. Modularizamos la funcionalidad por un laso y la ruta por otro.

module.exports = router;

// se cambio mayusculas
