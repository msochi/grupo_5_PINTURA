const fs = require('fs');
const path= require('path');

let productos = fs.readFileSync(path.join(__dirname, '../database/productos.json'),'utf8');
productos= JSON.parse(productos)


module.exports ={
  
    mostrar: function(req,res){
        let flag = 0;
        for(let i=0; i < productos.length; i++){
            if (req.params.sku == productos[i].sku){
                console.log(productos[i]);
                return res.render ('./modificarProducto', {productos: productos[i]})
                flag =1;
            } 
        }
        res.send ("No encuentro producto");
        

    },
    actualizar: function(req,res){
        for(let i=0; i < productos.length; i++){
            if (req.params.sku == productos[i].sku){
                productos[i].marca= req.body.marca;
                productos[i].categoria= req.body.categoria;
                productos[i].familia= req.body.familia;
                productos[i].tip= req.body.tipo;
                productos[i].presentacion=req.body.presentacion;
                productos[i].contenidoNeto= req.body.contenidoNeto;
                productos[i].color= req.body.color;
                productos[i].TiempoDeEspera= req.body.TiempoDeEspera;
                productos[i].base=req.body.base;
                productos[i].terminacion= req.body.terminacion;
                productos[i].rendimiento= req.body.rendimiento;
                productos[i].usoRecomendado= req.body.usoRecomendado;
                productos[i].secado= req.body.secado;
                productos[i].garantia= req.body.garantia;
                productos[i].imagenProducto= req.body.imagenProducto;
            } 
        }
        fs.writeFileSync(path.join(__dirname, '../database/productos.json'), JSON.stringify(productos))
        res.render ('./cargaProducto');
        
    },
   
}
  

;