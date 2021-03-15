const express = require ('express');
const router= express.Router ();

const multer = require('multer');
const path= require('path');
const modificarUsuarioController = require('../controllers/modificarUsuarioController');
const multerRegistro = require ('../middlewares/multerRegistro');
const validacionRegistro = require ('../middlewares/validacionRegistro')
// storage sirve para poder guargar las imagenes que sube el usuario junto con requerir multer.




router.get("/:id", modificarUsuarioController.mostrar);
router.post("/:id", multerRegistro.any(), validacionRegistro, modificarUsuarioController.actualizar);

module.exports = router;