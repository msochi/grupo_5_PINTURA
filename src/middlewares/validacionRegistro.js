const {check, body} = require("express-validator"); // Requerimos express-validator para validar el login y verificar que en la creación de cuentas no haya duplicados.
const fs = require('fs');
const path= require('path');

let usuarios = fs.readFileSync(path.join(__dirname, '../database/usuarios.json'),'utf8');
usuarios= JSON.parse(usuarios);
module.exports =[
    check("email").isEmail().withMessage("Ingresa un email válido"),
    body('email')
      .custom(function(datoDelUsuario) {
          for(let i = 0; i < usuarios.length; i++) {
               if(usuarios[i].email == datoDelUsuario) {
                return false;
                }
            }
                  return true
    })
    .withMessage('Email ya registrado con otro Usuario'),
    check("pass")
      .isLength ({min:4, max:16}).withMessage("Debe tener un minimo de 4 letras, números o combinación de ambas"),
    check("dni")
      .isLength ({min:8, max:8}).withMessage("Debe ingresar un DNI válido de 8 caracteres y sin puntos"),
    body('dni')
      .custom(function(datoDelUsuario) {
        
        for(let i = 0; i < usuarios.length; i++) {
              if(usuarios[i].dni == datoDelUsuario) {
                 return false;
                }
            }
                  return true
    })
      .withMessage('DNI ya registrado'),  
       
    
  ]
  