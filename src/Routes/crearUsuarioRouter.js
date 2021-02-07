const express = require ('express');
const router= express.Router ();
const crearUsuarioController = require ('../Controllers/crearUsuarioController'); // Tengo que importar o requerir el controlador que quiero utilizar para las rutas.
const multer = require('multer');
const path= require('path');

// storage sirve para poder guargar las imagenes que sube el usuario junto con requerir multer.
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../../public/uploadsAvatars") )
    },
    filename: function (req, file, cb) {
      console.log (req.body.email + Date.now() + path.extname(file.originalname));
      console.log (req.body);
      console.log (Date.now());
      console.log (path.extname(file.originalname));
      cb(null,req.body.mail + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })


router.get ("/", crearUsuarioController.crear); // aca tengo que combinar ruta y controlador. Solo pongo la referencia en el segundo parámetro. Modularizamos la funcionalidad por un laso y la ruta por otro.
router.post ("/", upload.any(), crearUsuarioController.crearUsuario); //upload.any o upload.single se agrgegan en router como si fuese un middleware para poder capturar las imagenes que suben.
module.exports = router;