//El controlador es un objeto literal que exportamos. Tiene muchas funciones agrupadas y que las utilizamos en los callbacks que nos piden para escribir una ruta.
//En los archivos Controllers solo van las responsabilidades del funcionamiento.

module.exports ={
    index: function(req,res){
        //res.send("Bienvenidos al sitio")
        res.render ('./index');
    
    }
}