const express = require ('express');
const router= express.Router ();
const thankYouController = require ('../Controllers/thankYouController'); 


router.get ("/", thankYouController.thankYou ); 

module.exports = router;