const {check, body} = require("express-validator"); // Requerimos express-validator para validar el login y verificar que en la creación de cuentas no haya duplicados.
const fs = require('fs');
const path= require('path');
const db = require('../database/models')

module.exports = function (req, res, next) {
  if (typeof req.session.usuario == 'undefined' || typeof req.session.blanco == 'undefined') {
      return res.send("No tiene permiso! Llamando al 911")
  } else {
      db.Clientes.findByPk(req.session.blanco)
      .then(function(resultado){
        console.log(resultado)
          if (resultado.tipo == 1) {
            next()
          } else {
            return res.send("No tiene permiso! Llamando al 911")
          }      
      })
  }
}