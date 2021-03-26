const db = require('../database/models/index')
const {check, body} = require("express-validator"); // Requerimos express-validator para validar el login y verificar que en la creación de cuentas no haya duplicados.
//let usuarios= db.Clientes.findAll();


module.exports =[

    check("email").isEmail().withMessage("Ingresa un email válido") ,
       
  check("pass")
    .isLength ({min:4, max:16}).withMessage("Debe tener un minimo de 4 letras, números o combinación de ambas") 
     
    
  ];