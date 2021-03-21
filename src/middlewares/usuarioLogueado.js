module.exports = function (req, res, next) {
    if (typeof req.session.usuario != 'undefined') {
        res.locals.usuario = req.session.usuario
        // locals solo sirve para las vistas.
    }
    next()

}