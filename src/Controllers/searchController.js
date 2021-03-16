//El controlador es un objeto literal que exportamos. Tiene muchas funciones agrupadas y que las utilizamos en los callbacks que nos piden para escribir una ruta.
//En los archivos Controllers solo van las responsabilidades del funcionamiento.

module.exports ={
    buscar: function (req, res) {
        console.log("entre")
        console.log(req.query.text);
        res.render ('index');
    }
}