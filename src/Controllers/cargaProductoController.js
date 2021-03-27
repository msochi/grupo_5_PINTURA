const { query } = require('express-validator');
const fs = require('fs');
const path= require('path');
const db = require('../database/models/index')
//let productos = fs.readFileSync(path.join(__dirname, '../database/productos.json'),'utf8');
//productos= JSON.parse(productos)


module.exports ={
    
    formulario: async (req,res)=>{
      
       const proveedores = await db.Proveedores.findAll();
       const marca = await db.Marcas.findAll()       ;
       const tipo = await db.Tipo.findAll();
       const subtipo = await db.Subtipo.findAll();
       const familia = await db.Familia.findAll();
       const subfamilia = await db.Subfamilia.findAll();
       const terminacion = await db.Terminacion.findAll();
       const productos = await db.Productos.findAll();
        res.render('./cargaProducto', {proveedores,marca,  tipo,subtipo, familia, subfamilia, terminacion,productos }) 
    },
    //Tambien se puede hacer  de esta forma: formulario:
     //function(req,res){
        //db.Proveedores.findAll().then(function (proveedores){
         //  db.Marcas.findAll().then(function (marcas){
          //     res.render ('./cargaProducto', {proveedores,marcas})
         //  })
      // })          
        //res.send("Bienvenidos al sitio")
        
   // },   
   // cargar: function(req,res){
        // en req.body esta la info del usuario
        //productos.push({
         //   sku:req.body.sku,
          //  marca: req.body.marca,
            //categoria: req.body.categoria,
          //  familia: req.body.familia,
          //  tipo: req.body.tipo,
          //  presentacion:req.body.presentacion,
          //  contenidoNeto: req.body.contenidoNeto,
         //   color: req.body.color,
         //   TiempoDeEspera: req.body.TiempoDeEspera,
          //  base:req.body.base,
         //   terminacion: req.body.terminacion,
         //   rendimiento: req.body.rendimiento,
         //   usoRecomendado: req.body.usoRecomendado,
           // secado: req.body.secado,
         //   garantia: req.body.garantia,
         //   imagenProducto: req.files[0].filename,
          
        //})
       // fs.writeFileSync(path.join(__dirname, '../database/productos.json'), JSON.stringify//(productos))
       // res.render ('./cargaProducto');
    //},
    buscarMarca: async (req,res)=>{
      console.log(req.params.id)
      const marca = await db.Marcas.findAll({
        where:{id_proveedor: req.params.id}
      }) 
      console.log(marca)
      res.send(marca)
    },

    buscarFamilia: async (req,res)=>{
      console.log(req.params.id)
      const subfamilia = await db.Subfamilia.findAll({
        where:{id_familia: req.params.id}
      }) 
      console.log(subfamilia)
      res.send(subfamilia)
    },

    buscarTipo: async (req,res)=>{
      console.log(req.params.id)
      const subtipo = await db.Subtipo.findAll({
        where:{id_tipo: req.params.id}
      }) 
      console.log(subtipo)
      res.send(subtipo)
    },
    
    cargar: function(req,res){
      console.log(req.body) 
      db.Productos.create({
        //productos.push({
           sku:req.body.sku,
            id_marca: req.body.id_marca,
            id_subtipo: req.body.id_subtipo,
            id_tipo: req.body.id_tipo,
            id_subfamilia: req.body.id_subfamilia,
            id_familia: req.body.id_familia,
            presentacion:req.body.presentacion,
            contenido_neto: req.body.contenido_neto,
            color: req.body.color,
            tiempo_entre_manos: req.body.tiempo_entre_manos,
            base:req.body.base,
            id_terminacion: req.body.id_terminacion,
            rendimiento: req.body.rendimiento,
            uso_recomendado: req.body.uso_recomendado,
            tiempo_de_secado: req.body.tiempo_de_secado,
            garantia: req.body.garantia,
            id_proveedor: req.body.id_proveedor,
            imagen_producto: req.files[0].filename,
          
        })
        console.log(req.body.id_marca)
        //fs.writeFileSync(path.join(__dirname, '../database/productos.json'), JSON.stringify(productos))
        res.redirect ("/cargaProducto");
    },
    //mostrar:  (req,res)=>{
       
      //  db.Productos.findByPk(req.params.id)
           // .then((productos) => {
        //let flag = 0;
        //for(let i=0; i < productos.length; i++){
          //  if (req.params.id == productos[i].id){
            //    console.log(productos[i]);
              //     return res.render ('./modificarProducto', {productos: productos[i]})
                //flag =1;
            //} 
       // }
        //res.send ("No encuentro producto");
    //})

    //},
   
}
;

//        db.Productos.findAll({
    //include: [{association: 'marcas'}],
  // include: [{association: 'subtipo'}],
    //include: [{association: 'tipo'}],
    //include: [{association: 'subfamilia'}],
   // include: [{association: 'familia'}],
   // include: [{association: 'terminacion'}],
   // include: [{association: 'proveedores'}],
//})
//.then(function (productos){
   // res.render ('./cargaProducto', {productos:productos})
//})
