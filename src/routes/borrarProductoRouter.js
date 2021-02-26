const express = require ('express');
const router= express.Router ();
const cargaProductoController = require ('../controllers/cargaProductoController'); // Tengo que importar o requerir el controlador que quiero utilizar para las rutas.

const path= require('path');
const borrarProductoController = require('../controllers/borrarProductoController');
// storage sirve para poder guargar las imagenes que sube el usuario junto con requerir multer.


router.get("/:sku", borrarProductoController.mostrar);// aca tengo que combinar ruta y controlador. Solo pongo la referencia en el segundo parámetro. Modularizamos la funcionalidad por un laso y la ruta por otro.
router.delete("/:sku", borrarProductoController.borrar)

module.exports = router;