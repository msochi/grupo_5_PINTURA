const fs = require('fs');
const path= require('path');

let productos = fs.readFileSync(path.join(__dirname, '../database/productos.json'),'utf8');
productos= JSON.parse(productos)


module.exports ={
  
    mostrar: function(req,res){
        for (i=0; i<productos.length ;i++){
            if (productos[i].sku == req.params.sku) {
               return res.render('borrarProducto', {productos : productos[i]});
            }
        }
      
      
        //let flag = 0;
        //for(let i=0; i < productos.length; i++){
           // if (req.params.sku == productos[i].sku){
             //   console.log(productos[i]);
            //   res.render ('./borrarProducto', {productos: productos[i]})
               // flag =1;
           // }
             
       //}
               
       res.send ("No encuentro producto");
      

    },
  
   borrar: function(req,res){
    //let paraBorrar= req.params.sku   
    //let ss = productos.indexOf(paraBorrar);
    //function myFunction(){  
        // Deleting a key (married) from the first object by using dot notation
      //  delete data[ss];
    //}
   

    let paraBorrar= req.params;
    console.log(paraBorrar)
    let resultados = productos.filter(nuevo=>
      nuevo.sku != paraBorrar.sku);
     console.log (resultados);
      productos = resultados;
      fs.writeFileSync(path.join(__dirname, '../database/productos.json'), JSON.stringify(productos))  
      
            res.redirect('/cargaproducto');
          
}};
