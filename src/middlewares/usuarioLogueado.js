module.exports = function (req, res, next) {
    if (typeof req.session.usuarioLogueado != 'undefined') {

        res.locals.usuarioLogueado = req.session.usuarioLogueado
        // locals solo sirve para las vistas.
    }
    next()

}