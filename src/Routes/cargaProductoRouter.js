const express = require ('express');
const router= express.Router ();
const cargaProductoController = require ('../Controllers/cargaProductoController'); // Tengo que importar o requerir el controlador que quiero utilizar para las rutas.
const multer = require('multer');
const path= require('path');
// storage sirve para poder guargar las imagenes que sube el usuario junto con requerir multer.
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../../public/imagenProductos") )
    },
    filename: function (req, file, cb) {
      cb(null,req.body.imagenProducto + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })


router.get ("/", cargaProductoController.cargar); // aca tengo que combinar ruta y controlador. Solo pongo la referencia en el segundo parámetro. Modularizamos la funcionalidad por un laso y la ruta por otro.
router.post ("/", cargaProductoController.cargar); 

module.exports = router;