//La responsabilidad de los archivos de Router son solo las rutas

const express = require ('express');
const router= express.Router ();
const loginController = require ('../Controllers/loginController'); // Tengo que importar o requerir el controlador que quiero utilizar para las rutas.



router.get ("/", loginController.login); // aca tengo que combinar ruta y controlador. Solo pongo la referencia en el segundo parámetro. Modularizamos la funcionalidad por un laso y la ruta por otro.
router.post ("/", loginController.checkUsuario); 
module.exports = router;