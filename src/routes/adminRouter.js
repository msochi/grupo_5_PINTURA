//La responsabilidad de los archivos de Router son solo las rutas
const express = require ('express');
const multer = require('multer');
const router= express.Router ();
const path= require('path');
const adminController = require ('../controllers/adminController'); // Tengo que importar o requerir el controlador que quiero utilizar para las rutas.
const loginUser = require ('../middlewares/loginUser');
const multerRegistro = require ('../middlewares/multerRegistro');
const registroValidacion = require ('../middlewares/registroValidacion');
const usuarioLogueado = require('../middlewares/usuarioLogueado');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/imagen_producto") )
  },
  filename: function (req, file, cb) {
    cb(null,req.body.id_marca + Date.now() + path.extname(file.originalname))
  }
})
 
var upload = multer({ storage: storage });




router.get ("/", adminController.adminLogin); // aca tengo que combinar ruta y controlador. Solo pongo la referencia en el segundo parámetro. Modularizamos la funcionalidad por un laso y la ruta por otro.
router.get ("/consolaadmin",usuarioLogueado, adminController.adminLogin2);
router.post ("/", loginUser, adminController.UsuarioAdmin);
router.get("/buscarusuario", adminController.buscarUsuario);
router.get ("/mostrarusuario/:id", adminController.mostrarUsuario);
router.post("/modificarusuario/:id",multerRegistro.any(),registroValidacion, adminController.actualizacion);

///// MODIFICAR PRODUCTO
router.get("/buscarproducto", adminController.buscarProducto);
router.get("/modificarproducto/:id", adminController.mostrarProducto);
router.get("/buscar/:id", adminController.buscarMarca);
router.get("/buscar/familia/:id", adminController.buscarFamilia);
router.get("/buscar/tipo/:id", adminController.buscarTipo);
//router.post("/productomodificado/:id", upload.any(), adminController.actualizarProducto);
router.post("/modificarproducto/:id", upload.any(), adminController.actualizarProducto);
router.delete("/modificarproducto/:id",adminController.eliminar);


///////////////// CARGA PRODUCTO

router.get ("/cargaproducto", adminController.formulario1);
router.get('/buscar/:id',adminController.buscarMarca1);
router.get('/buscar/familia/:id',adminController.buscarFamilia1);
router.get('/buscar/tipo/:id',adminController.buscarTipo1);
router.post ("/cargaProducto", upload.any(), adminController.cargar); 



module.exports = router;