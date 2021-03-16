const fs = require('fs');
const path= require('path');
const db = require('../database/models/index')
//let productos = fs.readFileSync(path.join(__dirname, '../database/productos.json'),'utf8');
//productos= JSON.parse(productos)


module.exports ={



 mostrar:  async (req,res)=>{
    console.log(req.params.id)
    console.log ('te estoy viendo')
     const proveedores = await db.Proveedores.findAll();
     const marca = await db.Marcas.findAll()       ;
     const tipo = await db.Tipo.findAll();
     const subtipo = await db.Subtipo.findAll();
     const familia = await db.Familia.findAll();
     const subfamilia = await db.Subfamilia.findAll();
     const terminacion = await db.Terminacion.findAll();
       db.Productos.findByPk(req.params.id)
          .then((productos) => {
            console.log(productos);
               res.render ('./modificarProducto', {productos:productos, proveedores,marca, tipo,subtipo,familia,subfamilia,terminacion })
            } 
        )

  },
 
  actualizar: function(req,res){
    db.Productos.actualizar({
            id_proveedor: req.body.id_proveedor,
            sku: req.body.sku,
            id_marca: req.body.id_marca,
            id_familia: req.body.  id_familia,
            id_subfamilia:req.body.id_subfamilia,
            id_tipo: req.body.id_tipo,
            id_subtipo: req.body.id_subtipo,
            presentacion: req.body.presentacion,
            contenidoNeto: req.body.contenidoNeto,
            color: req.body.color,
            tiempo_entre_manos: req.body.tiempo_entre_manos,
            base: req.body.base,
            id_terminacion: req.body.id_terminacion,
            rendimiento: req.body.rendimiento,
            usoRecomendado: req.body.usoRecomendado,
            tiempo_de_secado: req.body.tiempo_de_secado,
            garantia: req.body.garantia,
            imagen_producto: req.files[0].filename,
          },{ 
          where:{
            id: req.params.id  
        }
    } )  
    .then((modificado)=>{
    res.redirect("/");
})
.catch(error=>{
    res.send(error);
    });
},
eliminar: function(req,res){
db.Productos.destroy({
	where: {
		id: req.params.id
  }
}) 
.then(function(quePaso) {
  return res.send('Lo que me retorna es... ' + quePaso)
})
.catch(function(error) {
  return res.send(error)
}) 
}



}

     

