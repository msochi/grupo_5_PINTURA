const db = require("../database/models")
module.exports = function (req, res, next) {
    if (typeof req.session.usuario != 'undefined') {
        res.locals.usuario = req.session.usuario
        next()
        // locals solo sirve para las vistas.
    }else if (typeof req.cookies.recordarme != 'undefined') {
        db.Clientes.findByPk(req.cookies.recordamecheck)
        .then(function(resultado){
            res.locals.usuario = resultado;
            req.session.usuario = resultado;
            next()
        }).catch(function(e){
           return res.render("no encontrado")
        })
    }else {
    next()
}
}