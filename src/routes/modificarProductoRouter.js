const express = require ('express');
const router= express.Router ();

const multer = require('multer');
const path= require('path');
const modificarProductoController = require('../controllers/modificarProductoController');
// storage sirve para poder guargar las imagenes que sube el usuario junto con requerir multer.
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../../public/imagen_producto") )
    },
    filename: function (req, file, cb) {
      cb(null,req.body.id_marca + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })


router.get("/:id", modificarProductoController.mostrar);
router.get("/buscar/:id", modificarProductoController.buscarMarca);
router.get("/buscar/familia/:id", modificarProductoController.buscarFamilia);
router.get("/buscar/tipo/:id", modificarProductoController.buscarTipo);
router.post("/:id", upload.any(), modificarProductoController.actualizar);
router.delete("/eliminar/:id",modificarProductoController.eliminar);

module.exports = router;