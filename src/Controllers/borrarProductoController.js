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
                return res.render ('./borrarProducto', {productos: productos[i]})
                flag =1;
            } 
        }
        res.send ("No encuentro producto");
        

    },

   borrar: function(req,res){
       
     let resultados = productos.filter(function (nuevo){
         return nuevo != req.params.sku
    })
    console.log (resultados);
      productos = resultados;
        
         
                       
            res.redirect('/');
          
}};
