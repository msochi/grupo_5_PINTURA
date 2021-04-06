const express = require ('express');
const router= express.Router ();
const plpController = require ('../controllers/plpController'); 


router.get ("/", plpController.plp ); 
router.get ('/interior', plpController.interior);
router.get ('/exterior', plpController.exterior);
router.get ("/login", plpController.log);
router.get ('/otros', plpController.decoracion);
router.get ('/herramientas', plpController.herramientas);




module.exports = router;

