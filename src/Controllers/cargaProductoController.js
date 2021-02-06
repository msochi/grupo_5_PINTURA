const fs = require('fs');
const path= require('path');

let productos = fs.readFileSync(path.join(__dirname, '../database/productos.json'),'utf8');
productos= JSON.parse(productos)


module.exports ={
        cargar: function(req,res){
        // en req.body esta la info del usuario
        productos.push({
            marca: req.body.marca,
            categoria: req.body.categoria,
            familia: req.body.familia,
            tipo: req.body.tipo,
            presentacion:req.body.presentacion,
            contenidoNeto: req.body.contenidoNeto,
            color: req.body.color,
            TiempoDeEspera: req.body.TiempoDeEspera,
            base:req.body.base,
            terminacion: req.body.terminacion,
            rendimiento: req.body.rendimiento,
            usoRecomendado: req.body.usoRecomendado,
            secado: req.body.secado,
            garantia: req.body.garantia,
          
        })
        fs.writeFileSync(path.join(__dirname, '../database/productos.json'), JSON.stringify(productos))
        res.redirect ('./cargaProducto');
    },
 
    }
;