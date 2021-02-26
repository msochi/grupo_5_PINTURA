const express = require ('express');
const router= express.Router ();
const thankYouController = require ('../controllers/thankYouController'); 


router.get ("/", thankYouController.thankYou ); 

module.exports = router;