const express = require ('express');
const router= express.Router ();
const recuperoPassController = require ('../controllers/recuperoPassController');

// RECUPERAR CONTRASEÑA ///
router.get("/", recuperoPassController.recuperar);
//router.post("/", recuperoPassController.regenerar)
module.exports = router;