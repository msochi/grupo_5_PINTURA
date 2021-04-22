//El controlador es un objeto literal que exportamos. Tiene muchas funciones agrupadas y que las utilizamos en los callbacks que nos piden para escribir una ruta.
//En los archivos Controllers solo van las responsabilidades del funcionamiento.
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
// let usuarios = fs.readFileSync(path.join(__dirname, '../database/usuarios.json'),'utf8');
// usuarios = JSON.parse(usuarios);
const db = require('../database/models/');

const {validationResult } = require("express-validator");



module.exports = {
  adminLogin: function (req, res) {
      console.log("entrando al login")
    //res.send("Bienvenidos al sitio")
    res.render("./admin");
  },
  adminLogin2: function (req, res) {
    console.log("Consola Admin")
  //res.send("Bienvenidos al sitio")
  res.render("./consolaadmin");
},



  UsuarioAdmin: async function (req, res) {
    let errors= validationResult(req); // tengo que pasar validationResults con el objeto que tenga esos errores.De esta forma me guardo todo en un variable (errors).
    console.log( "entra funcidfsdfsdfon");
        if(errors.isEmpty()){
          let usuario= await db.Clientes.findOne({
            where: {
                email: req.body.email,
                   }
        })
       // .then (function (){
            
            console.log(req.body.pass);
            //console.log(bcrypt.compareSync(req.body.pass, usuario[0].pass));
            if (usuario) {
                console.log("por salir Usuario admin")
                if(bcrypt.compareSync(req.body.pass, usuario.pass)) {
                    req.session.usuario = usuario.email;
                    console.log("por salir")
                if (req.body.recordamecheck!= undefined){
                  res.cookie("recordamecheck",usuario.email, {maxAge: 7200000 })
                   
                }
                return  res.redirect ('/admin/consolaadmin');
                }

            } 

                return res.send ("credenciales invalidas") // agrergar nueva vista
              
            }
         
    },  
//MODIFICAR USUARIO
buscarUsuario:  async function (req,res){       
  console.log(req.query)
  console.log ('Estoy buscando usuario')        
  const localidades = await db.Localidades.findAll();
  const provincias = await db.Provincias.findAll();
  await db.Clientes.findOne({
    where: {
        email: req.query.email,
           }
}).then(function (cliente) {                      
          //return res.json(cliente.id) ;                
          res.redirect ('/admin/mostrarusuario/'+cliente.id)
          } 
      ).catch(function(e){res.send("User no encontrado")} )   
},
mostrarUsuario: async function (req, res) {
  console.log(req.query)
  console.log ('Estoy en MOSTRAR')  
  const localidades = await db.Localidades.findAll();
  const provincias = await db.Provincias.findAll();
   await db.Clientes.findByPk(req.params.id)
   .then(function  (cliente) {        
            //return res.json(cliente ) ;                
          res.render ('./mostrarusuario', {cliente: cliente, localidades, provincias})
          } 
      )
},
  actualizacion:  function(req,res){
     console.log ('Estoy por entrar')
      db.Clientes.update({
              email: req.body.email,
              pass: bcrypt.hashSync(req.body.pass, 12),
              avatar: req.files[0].filename,
              nombre: req.body.name,
              apellido: req.body.last_name,
              dni:req.body.dni,
              direccion: req.body.street,
              tipo: req.body.tipo,
              id_localidad: req.body.id_localidad,
              codigo_Postal: req.body.codigo_Postal,
              id_provincia:req.body.id_provincia,
              telefono: req.body.phone,
              
              },{ 
              where:{
                id: req.params.id  
            }
           
        })  
        .then(function(){
        res.redirect("/admin/consolaadmin");
    })
    .catch(error=>{
        res.send(error);
        });
        
    },
  /// CARGA PRODUCTO

      formulario1: async (req,res)=>{
        console.log ("pasa formulario")
         const proveedores = await db.Proveedores.findAll();
         const marca = await db.Marcas.findAll()       ;
         const tipo = await db.Tipo.findAll();
         const subtipo = await db.Subtipo.findAll();
         const familia = await db.Familia.findAll();
         const subfamilia = await db.Subfamilia.findAll();
         const terminacion = await db.Terminacion.findAll();
         const productos = await db.Productos.findAll();
          res.render('cargaproducto', {proveedores,marca,  tipo,subtipo, familia, subfamilia, terminacion,productos }) 
      },
      
      buscarMarca1: async (req,res)=>{
        console.log(req.params.id)
        const marca = await db.Marcas.findAll({
          where:{id_proveedor: req.params.id}
        }) 
        console.log(marca)
        res.send(marca)
      },
  
      buscarFamilia1: async (req,res)=>{
        console.log(req.params.id)
        const subfamilia = await db.Subfamilia.findAll({
          where:{id_familia: req.params.id}
        }) 
        console.log(subfamilia)
        res.send(subfamilia)
      },
  
      buscarTipo1: async (req,res)=>{
        console.log(req.params.id)
        const subtipo = await db.Subtipo.findAll({
          where:{id_tipo: req.params.id}
        }) 
        console.log(subtipo)
        res.send(subtipo)
      },
      
      cargar: function(req,res){
        console.log('ENTRO CARGA PRODUCTO');
        console.log(req.body) 
        db.Productos.create({
          //productos.push({
              
              id_proveedor: req.body.id_proveedor,
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
              promo: req.body.promo,
              precio: req.body.precio,
              costo: req.body.costo,
              imagen_producto: req.files[0].filename,
              titulo_producto: req.body.titulo_producto,
              descripcion: req.body.descripcion,
            
          })
          console.log(req.body.id_marca)
          res.redirect ("/admin/consolaadmin");
      },

/////////////////// MODIFICAR PRODUCTO
buscarProducto:  function (req,res){       
  console.log(req.query);
  console.log ('Estoy buscando Producto');     
    db.Productos.findOne({
    where: {
        sku: req.query.sku,
           }
})
.then(function (cliente) {                      
         //return res.json(cliente.id) ;                
          res.redirect ('/admin/modificarproducto/'+cliente.id)
          } 
    ) 
     .catch(function (error) {
     return res.send(error)
  })       
},
mostrarProducto:  async (req,res)=>{
  console.log(req.params.id)

  const productos = await db.Productos.findByPk(req.params.id);
  console.log(productos);
  const proveedores = await db.Proveedores.findAll();
  console.log(proveedores);
  const marca = await db.Marcas.findAll();
  const tipo = await db.Tipo.findAll();
  const subtipo = await db.Subtipo.findAll();
  const familia = await db.Familia.findAll();
  const subfamilia = await db.Subfamilia.findAll();
  const terminacion = await db.Terminacion.findAll();

  res.render ('./modificarproducto', {productos:productos, proveedores,marca, tipo,subtipo,familia,subfamilia,terminacion })
          
},

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
  
  /// ACTUALIZAR PRODUCTO
  
actualizarProducto: function(req,res){
  //return res.json(req.body)
  console.log ('Entra actualizar Producto');
  db.Productos.update({
          id_proveedor: req.body.id_proveedor,
          sku: req.body.sku,
          id_marca: req.body.id_marca,
          id_familia: req.body.  id_familia,
          id_subfamilia:req.body.id_subfamilia,
          id_tipo: req.body.id_tipo,
          id_subtipo: req.body.id_subtipo,
          presentacion: req.body.presentacion,
          contenido_neto: req.body.contenido_neto,
          color: req.body.color,
          tiempo_entre_manos: req.body.tiempo_entre_manos,
          base: req.body.base,
          id_terminacion: req.body.id_terminacion,
          rendimiento: req.body.rendimiento,
          uso_recomendado: req.body.uso_recomendado,
          tiempo_de_secado: req.body.tiempo_de_secado,
          garantia: req.body.garantia,
          promo: req.body.promo,
          precio: req.body.precio,
          costo: req.body.costo,
          imagen_producto: req.files[0].filename,
          titulo_producto: req.body.titulo_producto,
          descripcion: req.body.descripcion,
        },{ 
        where:{
          id: req.params.id  
      }
  } )  
  .then(function (){
    res.redirect("/admin/consolaadmin");
})
.catch(error=>{
  res.send(error);
  });
},
//// ELIMINAR
eliminar: function(req,res){
db.Productos.destroy({
where: {
  id: req.params.id
}
}) 
.then(function(quePaso) {
return res.redirect('/admin/consolaadmin/')
})
.catch(function(error) {
return res.send(error)
}) 
},





    }
    
   

