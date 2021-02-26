const express = require ('express');
const router= express.Router ();
const multer = require('multer');
const path= require('path');
const modificarProductoController = require('../controllers/modificarProductoController');
// storage sirve para poder guargar las imagenes que sube el usuario junto con requerir multer.
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../../public/imagenProductos") )
    },
    filename: function (req, file, cb) {
      cb(null,req.body.marca + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })




router.get("/:sku", modificarProductoController.mostrar);// aca tengo que combinar ruta y controlador. Solo pongo la referencia en el segundo parámetro. Modularizamos la funcionalidad por un laso y la ruta por otro.
router.post("/:sku", upload.any(), modificarProductoController.actualizar);

module.exports = router;