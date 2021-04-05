const {check, body} = require("express-validator"); // Requerimos express-validator para validar el login y verificar que en la creación de cuentas no haya duplicados.
const fs = require('fs');
const path= require('path');
const db = require('../database/models')

module.exports =[
    check("email").isEmail().withMessage("Ingresa un email válido"),
    body('email').custom((value , res) => {
      return db.Clientes.findOne({
         where: {
           email: value
         }
       })
       .then(user => {
           if (user) {
             return Promise.reject('Parece que este mail ya está registrado. Podés probar con otro.');
           }else {
             return Promise.resolve()
           }
         })
   }),                 
   
    check("pass")
      .isLength ({min:4, max:16}).withMessage("Debe tener un minimo de 4 letras, números o combinación de ambas"),
    check("dni")
      .isLength ({min:8, max:10}).withMessage("Debe ingresar un DNI válido de 8 caracteres y sin puntos"),
      body('dni').custom((value , res) => {
        return db.Clientes.findOne({
           where: {
             dni: value
           }
         })
         .then(user => {
             if (user) {
               return Promise.reject('El DNI ingresado pertenece a un usuario existente.¿Seguro que sos vos?.');
             }else {
               return Promise.resolve()
             }
           })
     }),       
     
  ]
  