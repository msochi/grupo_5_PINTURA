const express = require ('express');
const router= express.Router ();
const plpController = require ('../Controllers/plpController'); 


router.get ("/", plpController.plp ); 

module.exports = router;

